"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
/**
 * @description Extract file names within specific directory.
 * @param {string} imagesDirName
 * @returns {Array<string>} Extracted list of file names without file extensions.
 */
const fullImagesNames = (imagesDirName) => {
    // construct the full path of the desired directory:
    const fullPath = path_1.default.join(__dirname, imagesDirName);
    // read specific directory to extract its inner files:
    const fullImagesList = fs_1.default.readdirSync(fullPath);
    // remove file extension from file names:
    for (let i = 0; i < fullImagesList.length; i++) {
        fullImagesList[i] = path_1.default.parse(fullImagesList[i]).name;
    }
    return fullImagesList;
};
exports.default = fullImagesNames;
