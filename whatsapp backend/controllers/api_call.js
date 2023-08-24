
import axios from 'axios';
import OpenAI from "openai";

import { supabase, Whatsapp } from "../supabaseconf.js";



const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const sent_text = async (incomingMessage,res) => {
  try {
      const incomingmsg = incomingMessage.text.body;

      await Whatsapp.sendText({
          recipientPhone: incomingMessage.from.phone,
          message: "Please wait... ⌛️, we will send in a few seconds. ✉️",
      });

      // await Whatsapp.sendSimpleButtons({
      //     message: `Hey there! ${incomingMessage.from.name}👋`,
      //     recipientPhone: incomingMessage.from.phone,
      //     listOfButtons: [
      //         {
      //             title: 'Share Finance',
      //             id: 'share_finance',
      //         },
      //         {
      //             title: 'Revenue',
      //             id: 'revenue',
      //         },
      //         {
      //             title: 'Future Plans',
      //             id: 'future_plans',
      //         },
      //     ],
      // });

      const data = JSON.stringify({
          "text": incomingmsg
      });
      console.log(data);
      const apiConfig = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://4.224.87.34:8000/text',
          headers: {
              'smart': process.env.SMART,
              'Content-Type': 'application/json'
          },
          data: data
      };

      const apiResponse = await axios.request(apiConfig);
      return apiResponse.data;
      // if (apiResponse && 'graph' in apiResponse.data) {
      //   const apiResponseText = apiResponse.data;


      //   return apiResponseText;

      // }
      // if (apiResponse && 'text' in apiResponse.data) {
      //   const apiResponseText = apiResponse.data.text;
      //   return apiResponseText;

      // }

      // await Whatsapp.sendText({
      //     recipientPhone: incomingMessage.from.phone,
      //     message: apiResponseText,
      // });

  } catch (error) {
      console.log(error);

      await Whatsapp.sendText({
          recipientPhone: incomingMessage.from.phone,
          message: "Sorry, we are facing some issues. Please try again later. 🙏",
      });
      return res.sendStatus(200);
      // You might want to throw the error here if you want the caller to know there was an issue.
  }
};


const getTranscript = async (audio_url) => {
    try {
        console.log("audio_url", audio_url);

        const audioData = await axios.get(audio_url, {
            responseType: 'arraybuffer'
        });

        const response = await axios.post(
            'https://api-inference.huggingface.co/models/openai/whisper-large-v2',
            
            audioData.data,
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGING_FACE_API_TOKEN}`,
                    'Content-Type': 'application/octet-stream'
                }
            }
        );

        const result = response.data;
        console.log("eheehhe",result.text);
        return JSON.stringify(result.text);

    } catch (error) {
        console.error(error);
        return "Failed to retrieve transcript.";
    }
};






export { sent_text,getTranscript };


// const gptResponse = await openai.chat.completions.create({
//   model: "gpt-3.5-turbo-16k",
//   messages: [
//       {
//           "role": "user",
//           "content": ` hey can you make the below paragraph more short creative and funny.also add many cool emojis.  
//           Here is the paragraph:
//           ${apiResponseText} `
//       }
//   ],
//   temperature: 0.96,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });