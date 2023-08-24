"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const IError_1 = require("../types/IError");
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
const baseDir = path_1.default.resolve();
const audioMimeTypes = [
    'audio/mpeg',
    'audio/wav',
];
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        if (!audioMimeTypes.includes(file.mimetype)) {
            return cb(new IError_1.IError('Only audio files are allowed', 400), '');
        }
        cb(null, `${baseDir}/media`);
    },
    filename: function (req, file, cb) {
        var _a;
        const ext = path_1.default.extname(file.originalname);
        const filename = `${(0, uuid_1.v4)()}-${(_a = req.user) === null || _a === void 0 ? void 0 : _a.id}${ext}`;
        req.body.filename = filename;
        cb(null, filename);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
const audioUpload = (req, res, next) => {
    fs_1.default.mkdir('media', { recursive: true }, () => { });
    upload.single('audio')(req, res, function (err) {
        if (err instanceof multer_1.default.MulterError) {
            next(new IError_1.IError('Multer file upload error', 500));
        }
        else if (err) {
            next(err);
        }
        else {
            next();
        }
    });
};
exports.audioUpload = audioUpload;
//# sourceMappingURL=file-upload.js.map