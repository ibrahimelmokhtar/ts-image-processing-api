"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const img_collect_names_1 = __importDefault(require("../modules/img-collect-names"));
const express_validator_1 = require("express-validator");
/**
 * @description Threshold image validation rules.
 */
const thresholdValidationRules = [
    // (filename) parameter validation:
    (0, express_validator_1.query)('filename')
        .exists()
        .withMessage('Image name is required!')
        .notEmpty()
        .withMessage('Image name is empty')
        .isIn((0, img_collect_names_1.default)('../../images'))
        .withMessage('Image name does NOT exist'),
    // (threshold) parameter validation:
    (0, express_validator_1.query)('threshold')
        .exists()
        .withMessage('Threshold level is required!')
        .notEmpty()
        .withMessage('Threshold level is empty')
        .toInt()
        .isNumeric()
        .withMessage('Threshold level must be a number')
        .isInt({ min: 0 })
        .withMessage('Threshold min-level is 0')
        .isInt({ max: 255 })
        .withMessage('Threshold max-level is 255'),
];
exports.default = thresholdValidationRules;
