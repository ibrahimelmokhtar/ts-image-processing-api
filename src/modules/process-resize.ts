import path from "path";
import sharp, { ResizeOptions } from "sharp";


/**
 * @description Resize an image to specific width and height.
 * @param {string} fileName
 * @param {number} width
 * @param {number} height
 * @param {string} newFileName
 */
const resizeImage = (fileName: string, width: number, height: number, newFileName: string): void => {
    // set used images path:
    const originalImagePath: string = path.resolve(`${__dirname}/../images/${fileName}.jpg`);
    const processedImagePath: string = path.resolve(`${__dirname}/../../out/${newFileName}.jpg`);

    // set processing options:
    const processingOptions: ResizeOptions = {
        fit: "contain",
    };

    // apply resize operation:
    sharp(originalImagePath)
        .resize(width, height, processingOptions)
        .toFile(processedImagePath);
};

export default resizeImage;
