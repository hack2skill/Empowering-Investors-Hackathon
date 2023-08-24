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
exports.handleCallback = void 0;
const UserSchema_1 = __importDefault(require("../models/UserSchema"));
const auth_1 = require("../middlewares/auth");
const IError_1 = require("../types/IError");
const googleapis_1 = require("googleapis");
const axios_1 = __importDefault(require("axios"));
const handleCallback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const oauth2Client = new googleapis_1.google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.REDIRECT_URL);
        const { code } = req.body;
        if (!code) {
            throw new IError_1.IError('Code not found', 404);
        }
        const { tokens } = yield oauth2Client.getToken(code);
        const { access_token, refresh_token } = tokens;
        const userInfo = yield axios_1.default.get('https://people.googleapis.com/v1/people/me?personFields=emailAddresses,photos,names', { headers: { Authorization: `Bearer ${access_token}` } });
        const name = (_a = userInfo.data.names.find((name) => name.metadata.primary === true)) === null || _a === void 0 ? void 0 : _a.displayName;
        const profileImage = (_b = userInfo.data.photos.find((photo) => photo.metadata.primary === true)) === null || _b === void 0 ? void 0 : _b.url;
        const email = (_c = userInfo.data.emailAddresses.find((email) => email.metadata.primary === true)) === null || _c === void 0 ? void 0 : _c.value;
        handleUsercreation(email, profileImage, name, access_token, refresh_token, res);
    }
    catch (error) {
        next(error);
    }
});
exports.handleCallback = handleCallback;
function handleUsercreation(email, profileImage, name, access_token, refresh_token, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = new UserSchema_1.default({
            email,
            name,
            profileImage,
            access_token,
            refresh_token,
        });
        let updated;
        updated = yield user.save().catch((error) => __awaiter(this, void 0, void 0, function* () {
            if (error.code === 11000) {
                const updateUser = yield UserSchema_1.default.findOneAndUpdate({ email }, { $set: { access_token, refresh_token } });
                res.status(200).json({
                    userId: updateUser === null || updateUser === void 0 ? void 0 : updateUser._id.toString(),
                    token: (0, auth_1.generateToken)(updateUser._id.toString(), updateUser.email),
                });
                return true;
            }
            throw new IError_1.IError('Unknown mongo login error', 500);
        }));
        if (!updated) {
            res.status(200).json({
                userId: user._id,
                token: (0, auth_1.generateToken)(user._id.toString(), user.email),
            });
        }
    });
}
//# sourceMappingURL=authcontroller.js.map