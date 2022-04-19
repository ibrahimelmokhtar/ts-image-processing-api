"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.host = exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes"));
// set port and host values:
const port = process.env.PORT || '5000';
exports.port = port;
const host = 'http://127.0.0.1';
exports.host = host;
// create an express application:
const app = (0, express_1.default)();
exports.app = app;
// express app will use json format:
app.use(express_1.default.json());
// express app will use main route for '/api' route:
app.use('/api', routes_1.default);
