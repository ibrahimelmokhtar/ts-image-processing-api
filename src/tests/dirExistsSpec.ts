import checkOutputDirectory from '../modules/dir-exists';


describe('Directory Existence Suite', () => {
    it('checks the existence of (src) directory', () => {
        const isDirectoryFound: boolean = checkOutputDirectory('../../src/');
        expect(isDirectoryFound).toBeTruthy();
    });

    it('checks the existence of (out) directory', () => {
        const isDirectoryFound: boolean = checkOutputDirectory('../../out');
        expect(isDirectoryFound).toBeFalsy();
    });

    it('checks the existence of (out) directory again after its creation', () => {
        const isDirectoryFound: boolean = checkOutputDirectory('../../out');
        expect(isDirectoryFound).toBeTruthy();
    });
});
