"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const img_collect_names_1 = __importDefault(require("../modules/img-collect-names"));
const express_validator_1 = require("express-validator");
/**
 * @description Grayscale image validation rules.
 */
const grayScaleValidationRules = [
    // (filename) parameter validation:
    (0, express_validator_1.query)('filename')
        .exists()
        .withMessage('Image name is required!')
        .notEmpty()
        .withMessage('Image name is empty')
        .isIn((0, img_collect_names_1.default)('../../images'))
        .withMessage('Image name does NOT exist'),
];
exports.default = grayScaleValidationRules;
