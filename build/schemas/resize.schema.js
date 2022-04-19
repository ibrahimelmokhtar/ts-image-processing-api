"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const img_collect_names_1 = __importDefault(require("../modules/img-collect-names"));
const express_validator_1 = require("express-validator");
/**
 * @description Resize image validation rules.
 */
const resizeValidationRules = [
    // (filename) parameter validation:
    (0, express_validator_1.query)('filename')
        .exists()
        .withMessage('Image name is required!')
        .notEmpty()
        .withMessage('Image name is empty')
        .isIn((0, img_collect_names_1.default)('../../images'))
        .withMessage('Image name does NOT exist'),
    // (width) parameter validation:
    (0, express_validator_1.query)('width')
        .exists()
        .withMessage('Image width is required!')
        .notEmpty()
        .withMessage('Image width is empty')
        .toInt()
        .isNumeric()
        .withMessage('Width must be a number')
        .isInt({ min: 100 })
        .withMessage('Image min-width is 100')
        .isInt({ max: 1000 })
        .withMessage('Image max-width is 1000'),
    // (height) parameter validation:
    (0, express_validator_1.query)('height')
        .exists()
        .withMessage('Image height is required!')
        .notEmpty()
        .withMessage('Image height is empty')
        .toInt()
        .isNumeric()
        .withMessage('Width must be a number')
        .isInt({ min: 100 })
        .withMessage('Image min-height is 100')
        .isInt({ max: 1000 })
        .withMessage('Image max-height is 1000'),
];
exports.default = resizeValidationRules;
