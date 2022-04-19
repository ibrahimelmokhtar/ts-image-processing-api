"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dir_exists_1 = __importDefault(require("../modules/dir-exists"));
describe('Directory Existence Suite', () => {
    it('checks the existence of (src) directory', () => {
        const isDirectoryFound = (0, dir_exists_1.default)('../../src/');
        expect(isDirectoryFound).toBeTruthy();
    });
    it('checks the existence of (out) directory', () => {
        const isDirectoryFound = (0, dir_exists_1.default)('../../out');
        expect(isDirectoryFound).toBeFalsy();
    });
    it('checks the existence of (out) directory again after its creation', () => {
        const isDirectoryFound = (0, dir_exists_1.default)('../../out');
        expect(isDirectoryFound).toBeTruthy();
    });
});
