"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const img_collect_names_1 = __importDefault(require("../modules/img-collect-names"));
describe('Images Collection Suite', () => {
    it('collects images names within specific directory', () => {
        const imagesList = (0, img_collect_names_1.default)('../../images');
        expect(imagesList).toContain('encenadaport');
    });
    it('checks number of images within specific directory', () => {
        const imagesList = (0, img_collect_names_1.default)('../../images');
        expect(imagesList.length).toBe(5);
    });
});
