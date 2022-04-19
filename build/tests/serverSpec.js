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
const supertest_1 = __importDefault(require("supertest"));
const server_config_1 = require("../server/server.config");
const req = (0, supertest_1.default)(server_config_1.app);
describe('Server Endpoints Suites', () => {
    describe('Resize Route Suite', () => {
        it('gets /api/resize response after applying resize operation', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/resize?filename=santamonica&width=200&height=500');
            expect(res.status).toBe(200);
        }));
        it('gets /api/resize response from cache memory', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/resize?filename=santamonica&width=200&height=500');
            expect(res.status).toBe(200);
        }));
        it('gets /api/resize response for an image that does NOT exist', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/resize?filename=anyOtherNameThatDoesNotExist&width=100&height=100');
            expect(res.status).toBe(400);
        }));
    });
    describe('Grayscale Route Suite', () => {
        it('gets /api/grayscale response after applying grayscale operation', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/grayscale?filename=santamonica');
            expect(res.status).toBe(200);
        }));
        it('gets /api/grayscale response from cache memory', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/grayscale?filename=santamonica');
            expect(res.status).toBe(200);
        }));
        it('gets /api/grayscale response for an image that does NOT exist', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/grayscale?filename=anyOtherNameThatDoesNotExist');
            expect(res.status).toBe(400);
        }));
    });
    describe('Threshold Route Suite', () => {
        it('gets /api/threshold response after applying grayscale operation', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/threshold?filename=santamonica&threshold=150');
            expect(res.status).toBe(200);
        }));
        it('gets /api/threshold response from cache memory', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/threshold?filename=santamonica&threshold=150');
            expect(res.status).toBe(200);
        }));
        it('gets /api/threshold response for an image that does NOT exist', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/threshold?filename=anyOtherNameThatDoesNotExist&threshold=255');
            expect(res.status).toBe(400);
        }));
    });
    describe('Negative Route Suite', () => {
        it('gets /api/negative response after applying negative operation', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/negative?filename=santamonica');
            expect(res.status).toBe(200);
        }));
        it('gets /api/negative response from cache memory', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/negative?filename=santamonica');
            expect(res.status).toBe(200);
        }));
        it('gets /api/negative response for an image that does NOT exist', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield req.get('/api/negative?filename=anyOtherNameThatDoesNotExist');
            expect(res.status).toBe(400);
        }));
    });
});
