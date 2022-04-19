"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const img_exists_1 = __importDefault(require("../modules/img-exists"));
describe('Image Existence Suite', () => {
    it('checks the existence of (encenadaport) image', () => {
        const isImageFound = (0, img_exists_1.default)('../../images', 'encenadaport');
        expect(isImageFound).toBeTruthy();
    });
    it('checks the existence of (anyOtherNameThatDoesNotExist) image', () => {
        const isImageFound = (0, img_exists_1.default)('../../images', 'anyOtherNameThatDoesNotExist');
        expect(isImageFound).toBeFalsy();
    });
});
