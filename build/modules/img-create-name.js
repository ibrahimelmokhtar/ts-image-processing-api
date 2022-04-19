"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description Create desired name for the output image.
 * @param {string} imgName
 * @param {Object} options
 * @returns {string} the constructed name.
 */
const createImageName = (imgName, options) => {
    // construct desired name:
    let outputImageName = `${imgName}_${options.keyword}`;
    switch (options.keyword) {
        case 'resize':
            outputImageName += `_w${options === null || options === void 0 ? void 0 : options.height}_h${options === null || options === void 0 ? void 0 : options.height}`;
            break;
        case 'grayscale':
        case 'negative':
            break;
        case 'threshold':
            outputImageName += `_th${options === null || options === void 0 ? void 0 : options.threshold}`;
            break;
        default:
            break;
    }
    return outputImageName;
};
exports.default = createImageName;
