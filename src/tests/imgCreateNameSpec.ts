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

	it('creates image name (encenadaport_threshold_th255)', () => {
		const imageName: string = createImageName('encenadaport', {
			keyword: 'threshold',
			threshold: 255,
		});
		expect(imageName).toBe('encenadaport_threshold_th255');
	});

	it('creates image name (fjord_negative)', () => {
		const imageName: string = createImageName('fjord', {
			keyword: 'negative',
		});
		expect(imageName).toBe('fjord_negative');
	});
});
