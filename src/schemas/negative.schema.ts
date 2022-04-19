import fullImagesNames from '../modules/img-collect-names';
import { query } from 'express-validator';

/**
 * @description Negative image validation rules.
 */
const negativeValidationRules = [
	// (filename) parameter validation:
	query('filename')
		.exists()
		.withMessage('Image name is required!')
		.notEmpty()
		.withMessage('Image name is empty')
		.isIn(fullImagesNames('../../images'))
		.withMessage('Image name does NOT exist'),
];

export default negativeValidationRules;
