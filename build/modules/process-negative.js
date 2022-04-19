"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
/**
 * @description Grayscale an image.
 * @param {string} fileName
 * @param {string} newFileName
 */
const negativeImage = (fileName, newFileName) => {
    // set used images path:
    const originalImagePath = path_1.default.resolve(`${__dirname}/../../images/${fileName}.jpg`);
    const processedImagePath = path_1.default.resolve(`${__dirname}/../../out/${newFileName}.jpg`);
    // apply resize operation:
    (0, sharp_1.default)(originalImagePath).negate().toFile(processedImagePath);
};
exports.default = negativeImage;
