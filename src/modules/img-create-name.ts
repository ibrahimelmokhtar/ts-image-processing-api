/**
 * @description Create desired name for the output image.
 * @param {string} imgName
 * @param {number} width
 * @param {number} height
 * @returns {string} the constructed name.
 */
const createImageName = (
	imgName: string,
	width?: number,
	height?: number
): string => {
	// construct desired name:
	let outputImageName: string = `${imgName}_`;

	if (width !== undefined && height !== undefined) {
		outputImageName += `w${width}_h${height}`;
	} else {
		outputImageName += 'grayscale';
	}

	return outputImageName;
};

export default createImageName;
