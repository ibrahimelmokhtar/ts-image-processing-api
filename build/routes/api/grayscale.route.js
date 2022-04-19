"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const validator_middleware_1 = __importDefault(require("../../middlewares/validator.middleware"));
const grayscale_schema_1 = __importDefault(require("../../schemas/grayscale.schema"));
const img_create_name_1 = __importDefault(require("../../modules/img-create-name"));
const img_exists_1 = __importDefault(require("../../modules/img-exists"));
const dir_exists_1 = __importDefault(require("../../modules/dir-exists"));
const process_grayscale_1 = __importDefault(require("../../modules/process-grayscale"));
// create an express route:
const grayScaleRoute = express_1.default.Router();
// process GET requests for '/grayscale' route:
grayScaleRoute.get('/grayscale', grayscale_schema_1.default, validator_middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\ninside (/grayscale) route ...');
    // set the desired parameters:
    const fileName = req.query.filename;
    // construct the new filename:
    const newFileName = (0, img_create_name_1.default)(fileName, { keyword: 'grayscale' });
    // check /out directory existence:
    (0, dir_exists_1.default)('../../out');
    // check processed image existence:
    const isProcessedImageFound = (0, img_exists_1.default)('../../out', newFileName);
    if (isProcessedImageFound) {
        // return the processed image ...
        console.log('return the processed image ...');
    }
    else {
        // apply resizing process to the image.
        console.log('apply resizing process to the image.');
        (0, process_grayscale_1.default)(fileName, newFileName);
    }
    // set delay before responding with the result:
    setTimeout(() => {
        res.sendFile(path_1.default.resolve(__dirname, `../../../out/${newFileName}.jpg`));
    }, 200);
}));
exports.default = grayScaleRoute;
