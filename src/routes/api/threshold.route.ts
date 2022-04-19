import express, { Request, Response } from 'express';
import path from 'path';
import validateQuery from '../../middlewares/validator.middleware';
import thresholdValidationRules from '../../schemas/threshold.schema';
import createImageName from '../../modules/img-create-name';
import checkImageExistence from '../../modules/img-exists';
import checkOutputDirectory from '../../modules/dir-exists';
import thresholdImage from '../../modules/process-threshold';

// create an express route:
const thresholdRoute = express.Router();

// process GET requests for '/threshold' route:
thresholdRoute.get(
	'/threshold',
	thresholdValidationRules,
	validateQuery,
	async (req: Request, res: Response): Promise<void> => {
		console.log('\ninside (/threshold) route ...');

		// set the desired parameters:
		const fileName: string = req.query.filename as unknown as string;
		const threshold: number = req.query.threshold as unknown as number;

		// construct the new filename:
		const newFileName = createImageName(fileName, {
			keyword: 'threshold',
			threshold: threshold,
		});

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
			// apply resizing process to the image.
			console.log('apply resizing process to the image.');
			thresholdImage(fileName, newFileName);
		}

		// set delay before responding with the result:
		setTimeout(() => {
			res.sendFile(
				path.resolve(__dirname, `../../../out/${newFileName}.jpg`)
			);
		}, 200);
	}
);

export default thresholdRoute;
