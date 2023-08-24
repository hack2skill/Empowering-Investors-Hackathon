"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: false,
        default: '',
    },
    access_token: {
        type: String,
    },
    refresh_token: {
        type: String,
        expires: 3600,
    },
});
const userModel = (0, mongoose_1.model)('userModel', userSchema);
exports.default = userModel;
//# sourceMappingURL=UserSchema.js.map