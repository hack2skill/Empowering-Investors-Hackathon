"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userinfocontroller_1 = require("../controllers/userinfocontroller");
const auth_1 = require("../middlewares/auth");
const userinfoRouter = express_1.default.Router();
userinfoRouter.get('/userinfo', auth_1.isAuth, userinfocontroller_1.getUserInfo);
exports.default = userinfoRouter;
//# sourceMappingURL=userinforoutes.js.map