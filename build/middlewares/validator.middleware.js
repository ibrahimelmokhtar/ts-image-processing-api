"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
/**
 * @description Validate request query.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const validateQuery = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        console.log({ errors: errors.array({ onlyFirstError: true }) });
        return res
            .status(400)
            .json({ errors: errors.array({ onlyFirstError: true }) });
    }
    next();
};
exports.default = validateQuery;
