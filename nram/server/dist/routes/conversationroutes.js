"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conversationcontroller_1 = require("../controllers/conversationcontroller");
const auth_1 = require("../middlewares/auth");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
const conversationRouter = express_1.default.Router();
conversationRouter.post("/conversation", upload.single('audio'), auth_1.isAuth, conversationcontroller_1.saveConversation);
conversationRouter.get("/", auth_1.isAuth, conversationcontroller_1.getConversation);
exports.default = conversationRouter;
//# sourceMappingURL=conversationroutes.js.map