import path from 'path';
import sharp from 'sharp';

/**
 * @description Grayscale an image.
 * @param {string} fileName
 * @param {string} newFileName
 */
const negativeImage = (fileName: string, newFileName: string): void => {
	// set used images path:
	const originalImagePath: string = path.resolve(
		`${__dirname}/../../images/${fileName}.jpg`
	);
	const processedImagePath: string = path.resolve(
		`${__dirname}/../../out/${newFileName}.jpg`
	);

	// apply resize operation:
	sharp(originalImagePath).negate().toFile(processedImagePath);
};

export default negativeImage;
