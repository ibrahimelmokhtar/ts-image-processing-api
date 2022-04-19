import createImageName from '../modules/img-create-name';

describe('Image Name Creation Suite', () => {
	it('creates image name (encenadaport_resize_w200_h200)', () => {
		const imageName: string = createImageName('encenadaport', {
			keyword: 'resize',
			width: 200,
			height: 200,
		});
		expect(imageName).toBe('encenadaport_resize_w200_h200');
	});

	it('creates image name (fjord_grayscale)', () => {
		const imageName: string = createImageName('fjord', {
			keyword: 'grayscale',
		});
		expect(imageName).toBe('fjord_grayscale');
	});
});
