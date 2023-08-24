"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IError = void 0;
class IError extends Error {
    constructor(text, code) {
        super();
        this.text = text;
        this.code = code;
    }
}
exports.IError = IError;
//# sourceMappingURL=IError.js.map