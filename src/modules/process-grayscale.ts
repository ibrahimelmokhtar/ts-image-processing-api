import path from 'path';
import sharp from 'sharp';

/**
 * @description Grayscale an image.
 * @param {string} fileName
 * @param {string} newFileName
 */
const grayScaleImage = async (
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

	// apply grayscale operation:
	await sharp(originalImagePath).grayscale().toFile(processedImagePath);
};

export default grayScaleImage;
