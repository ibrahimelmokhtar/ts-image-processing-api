import checkImageExistence from '../modules/img-exists';


describe('Image Existence Suite', () => {
    it('checks the existence of (encenadaport) image', async () => {
        const isImageFound: boolean = await checkImageExistence('../../src/images', 'encenadaport');
        expect(isImageFound).toBeTruthy();
    });

    it('checks the existence of (anyOtherNameThatDoesNotExist) image', async () => {
        const isImageFound: boolean = await checkImageExistence('../../src/images', 'anyOtherNameThatDoesNotExist');
        expect(isImageFound).toBeFalsy();
    });
});
