import fullImagesNames from '../modules/img-collect-names';
import { query } from 'express-validator';


/**
 * @description Resize image validation rules.
 */
const resizeValidationRules = [
    // (filename) parameter validation:
    query('filename')
        .exists().withMessage('Image name is required!')
        .notEmpty().withMessage('Image name is empty')
        .isIn(fullImagesNames('../images')).withMessage('Image name does NOT exist'),

    // (width) parameter validation:
    query('width')
        .exists().withMessage('Image width is required!')
        .notEmpty().withMessage('Image width is empty')
        .toInt().isNumeric().withMessage('Width must be a number')
        .isInt({min: 100}).withMessage('Image min-width is 100')
        .isInt({max: 1000}).withMessage('Image max-width is 1000'),

    // (height) parameter validation:
    query('height')
        .exists().withMessage('Image height is required!')
        .notEmpty().withMessage('Image height is empty')
        .toInt().isNumeric().withMessage('Width must be a number')
        .isInt({min: 100}).withMessage('Image min-height is 100')
        .isInt({max: 1000}).withMessage('Image max-height is 1000'),
];

export default resizeValidationRules;
