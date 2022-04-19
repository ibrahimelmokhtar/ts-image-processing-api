import createImageName from '../modules/img-create-name';

describe('Image Name Creation Suite', () => {
	it('creates image name (encenadaport_w200_h200)', () => {
		const imageName: string = createImageName('encenadaport', 200, 200);
		expect(imageName).toBe('encenadaport_w200_h200');
	});

	it('creates image name (fjord_w100_h500)', () => {
		const imageName: string = createImageName('fjord', 100, 500);
		expect(imageName).toBe('fjord_w100_h500');
	});
});
