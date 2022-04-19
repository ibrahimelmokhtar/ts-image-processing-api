import fullImagesNames from '../modules/img-collect-names';


describe('Images Collection Suite', () => {
    it('collects images names within specific directory', () => {
        const imagesList: Array<string> = fullImagesNames('../../images');
        expect(imagesList).toContain('encenadaport');
    });

    it('checks number of images within specific directory', () => {
        const imagesList: Array<string> = fullImagesNames('../../images');
        expect(imagesList.length).toBe(5);
    });
});
