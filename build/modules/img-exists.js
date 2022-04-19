"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const img_collect_names_1 = __importDefault(require("./img-collect-names"));
/**
 * @description Check whether an image exists in specific directory or not.
 * @param {string} imagesDirName
 * @param {string} imageName
 * @returns {boolean} whether an image exists or not.
 */
const checkImageExistence = (imagesDirName, imageName) => {
    // status of the image:
    let isFound = false;
    // obtain ALL images names from specific directory:
    const imagesNameList = (0, img_collect_names_1.default)(imagesDirName);
    // check the existence of image name within the collected images:
    for (let i = 0; i < imagesNameList.length; i++) {
        if (imagesNameList[i] === imageName) {
            isFound = true;
            break;
        }
    }
    return isFound;
};
exports.default = checkImageExistence;
