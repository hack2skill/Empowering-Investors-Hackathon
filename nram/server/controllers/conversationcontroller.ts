import { RequestHandler } from "express";
import { TextServiceClient } from "@google-ai/generativelanguage/build/src/v1beta2/text_service_client";
import { GoogleAuth } from "google-auth-library";
import ConversationModel from "../models/ConversationSchema";
import { IRequest } from "../types/IRequest";
import * as fs from "fs";
import * as path from "path";
import axios from "axios";
import FormData from "form-data";
// Load environment variables from .env file
require("dotenv").config();

// Route to handle audio data

const MODEL_NAME = "models/text-bison-001";
const PALM_KEY = process.env.PALM_API_KEY;

// Create an instance of GoogleAuth
const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(PALM_KEY || ""),
});

async function generateResponse(prompt: string): Promise<string> {
  const input = prompt;

  const result = await client.generateText({
    model: MODEL_NAME,
    prompt: {
      text: input,
    },
  });

  return JSON.stringify(result);
}

export const saveConversation: RequestHandler = async (
  req: IRequest,
  res,
  next
) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No audio file provided" });
    }

    const tempFilePath = path.join(process.cwd(), "audio_files", "audio.wav");
    fs.writeFileSync(tempFilePath, req.file.buffer);

    const audioFile = fs.createReadStream(tempFilePath);

    let data = new FormData();
    data.append("file", audioFile);
    data.append("model", "whisper-1");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.openai.com/v1/audio/transcriptions",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        ...data.getHeaders(),
      },
      data: data,
    };

    const response = await axios(config);
    console.log(response.data?.text);

    const response2 = await generateResponse(
      `if the question is Share this video with your friends on social media then say i did'nt heard anything if the question is related to stock market,stock exchange,investing then only answer.For other questions reply that I am not trained to answer this questions, The question is :${response.data?.text} `
    );
    const parsedResponse = JSON.parse(response2);
    const output = parsedResponse[0].candidates[0].output;

    console.log(output);
    const userId = req.user?.id;
    const conversation = new ConversationModel({
      userId,
      prompt: response.data?.text,
      response: output,
    });

    await conversation.save();

    res.status(201).json({ output });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const getConversation: RequestHandler = async (
  req: IRequest,
  res,
  next
) => {
  try {
    const userId = req.user?.id;

    const conversationData = await ConversationModel.find({ userId });

    console.log(conversationData);

    res.status(200).json({
      message: "Conversation data retrieved successfully",
      data: conversationData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};
