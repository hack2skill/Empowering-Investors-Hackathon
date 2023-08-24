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
exports.getUserInfo = void 0;
const IError_1 = require("../types/IError");
const UserSchema_1 = __importDefault(require("../models/UserSchema"));
const getUserInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const user = yield UserSchema_1.default.findById(id);
        if (!user) {
            throw new IError_1.IError('User info not found', 404);
        }
        const { name, profileImage, email } = user;
        res.status(200).json({ name, profileImage, email });
    }
    catch (error) {
        next(error);
    }
});
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=userinfocontroller.js.map