"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ConversationSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    prompt: { type: String, required: true },
    response: { type: String, required: false },
});
const ConversationModel = (0, mongoose_1.model)('Conversation', ConversationSchema);
exports.default = ConversationModel;
//# sourceMappingURL=ConversationSchema.js.map