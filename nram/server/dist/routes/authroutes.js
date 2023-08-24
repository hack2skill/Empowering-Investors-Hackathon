"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authcontroller_1 = require("../controllers/authcontroller");
const authRouter = express_1.default.Router();
authRouter.post('/oauth/google', authcontroller_1.handleCallback);
exports.default = authRouter;
//# sourceMappingURL=authroutes.js.map