import fullImagesNames from "./img-collect-names";


/**
 * @description Check whether an image exists in specific directory or not.
 * @param {string} imagesDirName
 * @param {string} imageName
 * @returns {boolean} whether an image exists or not.
 */
const checkImageExistence = async (imagesDirName: string, imageName: string): Promise<boolean> => {
    let isFound: boolean = false;

    // obtain ALL images names from specific directory:
    const imagesNameList: Array<string> = await (fullImagesNames(imagesDirName) as unknown) as Array<string>;

    // check the existence of image name within the collected images:
    for (let i=0; i <imagesNameList.length; i++) {
        if (imagesNameList[i] === imageName) {
            isFound = true;
            break;
        }
    }

    return isFound;
};

export default checkImageExistence;
