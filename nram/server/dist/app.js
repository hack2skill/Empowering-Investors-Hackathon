"use strict";
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
const authroutes_1 = __importDefault(require("./routes/authroutes"));
const conversationroutes_1 = __importDefault(require("./routes/conversationroutes"));
const userinforoutes_1 = __importDefault(require("./routes/userinforoutes"));
const app = (0, express_1.default)();
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGODB_URL;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static("media"));
app.use((0, morgan_1.default)("short"));
app.use((error, req, res, next) => {
    console.error(error.message);
    if (error.name === "ValidationError") {
        error.text = error.message;
        error.code = 400;
    }
    const statusCode = typeof error.code === "number" && error.code >= 100 && error.code <= 599
        ? error.code
        : 500;
    res.status(statusCode).json({
        message: error.text || "Internal server error",
    });
});
app.use("/auth", authroutes_1.default);
app.use("/api", conversationroutes_1.default);
app.use("/user", userinforoutes_1.default);
const server = http_1.default.createServer(app);
server.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server listening on port ${port}`);
    mongoose_1.default
        .connect(mongoURL)
        .then(() => {
        console.log("Connected to mongo db");
    })
        .catch((err) => console.log("Couldn't connect to mongodb :" + err));
}));
//# sourceMappingURL=app.js.map