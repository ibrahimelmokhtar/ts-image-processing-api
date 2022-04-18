import checkOutputDirectory from '../modules/dir-exists';


describe('Directory Existence Suite', () => {
    it('checks the existence of (src) directory', async () => {
        const isDirectoryFound: boolean = await checkOutputDirectory('../../src/');
        expect(isDirectoryFound).toBeTruthy();
    });

    it('checks the existence of (out) directory', async () => {
        const isDirectoryFound: boolean = await checkOutputDirectory('../../src/out');
        expect(isDirectoryFound).toBeFalsy();
    });

    it('checks the existence of (out) directory again after its creation', async () => {
        const isDirectoryFound: boolean = await checkOutputDirectory('../../src/out');
        expect(isDirectoryFound).toBeTruthy();
    });
});
