import express, { Request, Response } from 'express';
import path from 'path';
import validateQuery from '../../middlewares/validator.middleware';
import resizeValidationRules from '../../schemas/resize.schema';
import createImageName from '../../modules/img-create-name';
import checkImageExistence from '../../modules/img-exists';
import checkOutputDirectory from '../../modules/dir-exists';
import resizeImage from '../../modules/process-resize';

// create an express route:
const resizeRoute = express.Router();

// process GET requests for '/resize' route:
resizeRoute.get(
	'/resize',
	resizeValidationRules,
	validateQuery,
	async (req: Request, res: Response): Promise<void> => {
		console.log('\ninside (/resize) route ...');

		// set the desired parameters:
		const fileName: string = req.query.filename as unknown as string;
		const width: number = req.query.width as unknown as number;
		const height: number = req.query.height as unknown as number;

		// construct the new filename:
		const newFileName = createImageName(fileName, width, height);

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
			resizeImage(fileName, width, height, newFileName);
		}

		// set delay before responding with the result:
		setTimeout(() => {
			res.sendFile(
				path.resolve(__dirname, `../../../out/${newFileName}.jpg`)
			);
		}, 200);
	}
);

export default resizeRoute;
