import path from "path";
import fs, { promises as fsPromises } from "fs";


const checkOutputDirectory = async (imagesDirName: string): Promise<boolean> => {
    const outputPath = path.join(__dirname, imagesDirName);
    console.log(outputPath);

    let isFound: boolean = false;

    if (fs.existsSync(outputPath)) {
        console.log('Directory exists ...');
        isFound = true;
    } else {
        console.log('Directory will be created now ...');
    }

    return isFound;
};

export default checkOutputDirectory;
