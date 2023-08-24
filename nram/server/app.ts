import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
// import { config } from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import http from "http";
import { IError } from "./types/IError";
import authRouter from "./routes/authroutes";
import conversationRouter from "./routes/conversationroutes";
import userinfoRouter from "./routes/userinforoutes";


const app = express();
// config();
require("dotenv").config();

const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGODB_URL;

app.use(cors());

app.use(express.json());

app.use(express.static("media"));

app.use(morgan("short"));




app.use(
  (error: IError, req: Request, res: Response, next: NextFunction): void => {
    console.error(error.message);
    if (error.name === "ValidationError") {
      error.text = error.message;
      error.code = 400;
    }
    const statusCode =
      typeof error.code === "number" && error.code >= 100 && error.code <= 599
        ? error.code
        : 500;
    res.status(statusCode).json({
      message: error.text || "Internal server error",
    });
  }
);

app.use("/auth", authRouter);

app.use("/api", conversationRouter);

app.use("/user", userinfoRouter);

const server = http.createServer(app);

server.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
  mongoose
    //@ts-ignore
    .connect(mongoURL)
    .then(() => {
      console.log("Connected to mongo db");
    })
    .catch((err: Error) => console.log("Couldn't connect to mongodb :" + err));
});
