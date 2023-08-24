"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.isAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const IError_1 = require("../types/IError");
let err;
const tokenDecode = (req) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    if (!token) {
        return new IError_1.IError('Token is Absent', 401);
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'somesecret');
        req.user = decoded;
    }
    catch (e) {
        throw new IError_1.IError('Unauthorized', 401);
    }
};
const isAuth = (req, res, next) => {
    try {
        err = tokenDecode(req);
        if (err instanceof IError_1.IError) {
            throw err;
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.isAuth = isAuth;
const generateToken = (id, email) => {
    const token = jsonwebtoken_1.default.sign({ id, email }, process.env.JWT_SECRET || 'somesecret', {
        expiresIn: '7d',
    });
    return token;
};
exports.generateToken = generateToken;
//# sourceMappingURL=auth.js.map