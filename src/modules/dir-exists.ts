import path from "path";
import fs from "fs";


/**
 * @description Check whether a directory exists or not.
 * @param {string} imagesDirName
 * @returns {boolean} whether a directory exists or not.
 */
const checkOutputDirectory = (imagesDirName: string): boolean => {
    // status of the directory:
    let isFound: boolean = false;

    // construct the full path of the directory:
    const outputPath = path.join(__dirname, imagesDirName);

    // check directory existence, then create it if it does NOT exist:
    if (fs.existsSync(outputPath)) {
        isFound = true;
    } else {
        createOutputDirectory(imagesDirName);
    }

    return isFound;
};


/**
 * @description Create directory using its name.
 * @param {string} imagesDirName
 */
const createOutputDirectory = (imagesDirName: string): void => {
    // construct the full path of the directory:
    const outputPath = path.join(__dirname, imagesDirName);

    // create the directory:
    fs.mkdirSync(outputPath);
};

export default checkOutputDirectory;
