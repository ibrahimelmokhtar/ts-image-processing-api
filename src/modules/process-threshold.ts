import path from 'path';
import sharp from 'sharp';

/**
 * @description Threshold an image based on specific level.
 * @param {string} fileName
 * @param {string} newFileName
 */
const thresholdImage = async (
	fileName: string,
	newFileName: string
): Promise<void> => {
	// set used images path:
	const originalImagePath: string = path.resolve(
		`${__dirname}/../../images/${fileName}.jpg`
	);
	const processedImagePath: string = path.resolve(
		`${__dirname}/../../out/${newFileName}.jpg`
	);

	// apply threshold operation:
	await sharp(originalImagePath).threshold().toFile(processedImagePath);
};

export default thresholdImage;
