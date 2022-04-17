import path from "path";
import { promises as fsPromises } from "fs";

/**
 * @description Extract file names within specific directory.
 * @param {string} imagesDirName
 * @returns {Array<string>} Extracted list of file names without file extensions.
 */

const fullImagesNames = async (imagesDirName: string): Promise<Array<string>> => {
    // construct the full path of the desired directory:
    const fullPath: string = path.join(__dirname, imagesDirName);

    // read specific directory to extract its inner files:
    const fullImagesList = await fsPromises.readdir(fullPath);

    // remove file extension from file names:
    for (let i=0; i<fullImagesList.length; i++) {
        fullImagesList[i] = path.parse(fullImagesList[i]).name;
    }

    return fullImagesList;
};

export default fullImagesNames;
