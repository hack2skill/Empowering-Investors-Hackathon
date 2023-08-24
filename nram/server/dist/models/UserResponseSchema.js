"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserResponseSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    prompt: {
        type: String,
        required: true,
    },
    response: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const UserResponseModel = (0, mongoose_1.model)('UserResponseModel', UserResponseSchema);
exports.default = UserResponseModel;
//# sourceMappingURL=UserResponseSchema.js.map