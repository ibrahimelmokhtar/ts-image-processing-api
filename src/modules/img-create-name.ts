/**
 * @description Create desired name for the output image.
 * @param {string} imgName
 * @param {Object} options
 * @returns {string} the constructed name.
 */
const createImageName = (
	imgName: string,
	options: {
		keyword: undefined | string;
		width?: undefined | number;
		height?: undefined | number;
		threshold?: undefined | number;
	}
): string => {
	// construct desired name:
	let outputImageName: string = `${imgName}_${options.keyword}`;

	switch (options.keyword) {
		case 'resize':
			outputImageName += `_w${options?.height}_h${options?.height}`;
			break;

		case 'grayscale':
		case 'negative':
			break;

		case 'threshold':
			outputImageName += `_th${options?.threshold}`;
			break;

		default:
			break;
	}

	return outputImageName;
};

export default createImageName;
