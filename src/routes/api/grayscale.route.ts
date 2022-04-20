import express, { Request, Response } from 'express';
import path from 'path';
import validateQuery from '../../middlewares/validator.middleware';
import grayScaleValidationRules from '../../schemas/grayscale.schema';
import createImageName from '../../modules/img-create-name';
import checkImageExistence from '../../modules/img-exists';
import checkOutputDirectory from '../../modules/dir-exists';
import grayScaleImage from '../../modules/process-grayscale';

// create an express route:
const grayScaleRoute = express.Router();

// process GET requests for '/grayscale' route:
grayScaleRoute.get(
	'/grayscale',
	grayScaleValidationRules,
	validateQuery,
	async (req: Request, res: Response): Promise<void> => {
		console.log('\ninside (/grayscale) route ...');

		// set the desired parameters:
		const fileName: string = req.query.filename as unknown as string;

		// construct the new filename:
		const newFileName = createImageName(fileName, { keyword: 'grayscale' });

		// check /out directory existence:
		checkOutputDirectory('../../out');

		// check processed image existence:
		const isProcessedImageFound: boolean = checkImageExistence(
			'../../out',
			newFileName
		);

		if (isProcessedImageFound) {
			// return the processed image ...
			console.log('return the processed image ...');
		} else {
			// apply grayscale process to the image.
			console.log('apply resizing process to the image.');
			await grayScaleImage(fileName, newFileName);
		}

		// respond with the result:
		res.sendFile(
			path.resolve(__dirname, `../../../out/${newFileName}.jpg`)
		);
	}
);

export default grayScaleRoute;
