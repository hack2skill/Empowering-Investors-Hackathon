import express from "express";
import {
  getConversation,
  saveConversation,
} from "../controllers/conversationcontroller";
import { isAuth } from "../middlewares/auth";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const conversationRouter = express.Router();

conversationRouter.post("/conversation",upload.single('audio'), isAuth, saveConversation);
conversationRouter.get("/", isAuth, getConversation);

export default conversationRouter;
