"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversation = exports.saveConversation = void 0;
const text_service_client_1 = require("@google-ai/generativelanguage/build/src/v1beta2/text_service_client");
const google_auth_library_1 = require("google-auth-library");
const ConversationSchema_1 = __importDefault(require("../models/ConversationSchema"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
require("dotenv").config();
const MODEL_NAME = "models/text-bison-001";
const PALM_KEY = process.env.PALM_API_KEY;
const client = new text_service_client_1.TextServiceClient({
    authClient: new google_auth_library_1.GoogleAuth().fromAPIKey(PALM_KEY || ""),
});
function generateResponse(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const input = prompt;
        const result = yield client.generateText({
            model: MODEL_NAME,
            prompt: {
                text: input,
            },
        });
        return JSON.stringify(result);
    });
}
const saveConversation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No audio file provided" });
        }
        const tempFilePath = path.join(process.cwd(), "audio_files", "audio.wav");
        fs.writeFileSync(tempFilePath, req.file.buffer);
        const audioFile = fs.createReadStream(tempFilePath);
        let data = new form_data_1.default();
        data.append("file", audioFile);
        data.append("model", "whisper-1");
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://api.openai.com/v1/audio/transcriptions",
            headers: Object.assign({ Authorization: `Bearer ${process.env.OPENAI_KEY}` }, data.getHeaders()),
            data: data,
        };
        const response = yield (0, axios_1.default)(config);
        console.log((_a = response.data) === null || _a === void 0 ? void 0 : _a.text);
        const response2 = yield generateResponse(`if the question is Share this video with your friends on social media then say i did'nt heard anything if the question is related to stock market,stock exchange,investing then only answer.For other questions reply that I am not trained to answer this questions, The question is :${(_b = response.data) === null || _b === void 0 ? void 0 : _b.text} `);
        const parsedResponse = JSON.parse(response2);
        const output = parsedResponse[0].candidates[0].output;
        console.log(output);
        const userId = (_c = req.user) === null || _c === void 0 ? void 0 : _c.id;
        const conversation = new ConversationSchema_1.default({
            userId,
            prompt: (_d = response.data) === null || _d === void 0 ? void 0 : _d.text,
            response: output,
        });
        yield conversation.save();
        res.status(201).json({ output });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Server error" });
    }
});
exports.saveConversation = saveConversation;
const getConversation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    try {
        const userId = (_e = req.user) === null || _e === void 0 ? void 0 : _e.id;
        const conversationData = yield ConversationSchema_1.default.find({ userId });
        console.log(conversationData);
        res.status(200).json({
            message: "Conversation data retrieved successfully",
            data: conversationData,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
});
exports.getConversation = getConversation;
//# sourceMappingURL=conversationcontroller.js.map