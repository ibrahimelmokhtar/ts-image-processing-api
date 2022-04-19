"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
/**
 * @description Resize an image to specific width and height.
 * @param {string} fileName
 * @param {number} width
 * @param {number} height
 * @param {string} newFileName
 */
const resizeImage = (fileName, width, height, newFileName) => {
    // set used images path:
    const originalImagePath = path_1.default.resolve(`${__dirname}/../../images/${fileName}.jpg`);
    const processedImagePath = path_1.default.resolve(`${__dirname}/../../out/${newFileName}.jpg`);
    // set processing options:
    const processingOptions = {
        fit: 'contain',
    };
    // apply resize operation:
    (0, sharp_1.default)(originalImagePath)
        .resize(width, height, processingOptions)
        .toFile(processedImagePath);
};
exports.default = resizeImage;
