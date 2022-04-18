

/**
 * @description Create desired name for the output image.
 * @param {string} imgName
 * @param {number} width
 * @param {number} height
 * @returns {string} the constructed name.
 */
const createImageName = (imgName: string, width: number, height: number): string => {
    // construct desired name:
    const outputImageName: string = `${imgName}_w${width}_h${height}`;

    return outputImageName;
}

export default createImageName;
