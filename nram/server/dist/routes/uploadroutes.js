"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const uploadcontroller_1 = require("../controllers/uploadcontroller");
const file_upload_1 = require("../middlewares/file-upload");
const uploadRouter = express_1.default.Router();
uploadRouter.post('/upload', auth_1.isAuth, file_upload_1.audioUpload, uploadcontroller_1.uploadAudio);
exports.default = uploadRouter;
//# sourceMappingURL=uploadroutes.js.map