"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const img_create_name_1 = __importDefault(require("../modules/img-create-name"));
describe('Image Name Creation Suite', () => {
    it('creates image name (encenadaport_resize_w200_h200)', () => {
        const imageName = (0, img_create_name_1.default)('encenadaport', {
            keyword: 'resize',
            width: 200,
            height: 200,
        });
        expect(imageName).toBe('encenadaport_resize_w200_h200');
    });
    it('creates image name (fjord_grayscale)', () => {
        const imageName = (0, img_create_name_1.default)('fjord', {
            keyword: 'grayscale',
        });
        expect(imageName).toBe('fjord_grayscale');
    });
    it('creates image name (encenadaport_threshold_th255)', () => {
        const imageName = (0, img_create_name_1.default)('encenadaport', {
            keyword: 'threshold',
            threshold: 255,
        });
        expect(imageName).toBe('encenadaport_threshold_th255');
    });
    it('creates image name (fjord_negative)', () => {
        const imageName = (0, img_create_name_1.default)('fjord', {
            keyword: 'negative',
        });
        expect(imageName).toBe('fjord_negative');
    });
});
