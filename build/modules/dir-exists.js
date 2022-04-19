"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
/**
 * @description Create directory using its name.
 * @param {string} imagesDirName
 */
const createOutputDirectory = (imagesDirName) => {
    // construct the full path of the directory:
    const outputPath = path_1.default.join(__dirname, imagesDirName);
    // create the directory:
    fs_1.default.mkdirSync(outputPath);
};
/**
 * @description Check whether a directory exists or not.
 * @param {string} imagesDirName
 * @returns {boolean} whether a directory exists or not.
 */
const checkOutputDirectory = (imagesDirName) => {
    // status of the directory:
    let isFound = false;
    // construct the full path of the directory:
    const outputPath = path_1.default.join(__dirname, imagesDirName);
    // check directory existence, then create it if it does NOT exist:
    if (fs_1.default.existsSync(outputPath)) {
        isFound = true;
    }
    else {
        createOutputDirectory(imagesDirName);
    }
    return isFound;
};
exports.default = checkOutputDirectory;
