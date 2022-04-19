import fullImagesNames from '../modules/img-collect-names';
import { query } from 'express-validator';

/**
 * @description Threshold image validation rules.
 */
const thresholdValidationRules = [
	// (filename) parameter validation:
	query('filename')
		.exists()
		.withMessage('Image name is required!')
		.notEmpty()
		.withMessage('Image name is empty')
		.isIn(fullImagesNames('../../images'))
		.withMessage('Image name does NOT exist'),

	// (threshold) parameter validation:
	query('threshold')
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

export default thresholdValidationRules;
