import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

/**
 * @description Validate request query.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const validateQuery = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		console.log({ errors: errors.array({ onlyFirstError: true }) });
		return res
			.status(400)
			.json({ errors: errors.array({ onlyFirstError: true }) });
	}

	next();
};

export default validateQuery;
