"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const grayscale_route_1 = __importDefault(require("./api/grayscale.route"));
const resize_route_1 = __importDefault(require("./api/resize.route"));
const threshold_route_1 = __importDefault(require("./api/threshold.route"));
const negative_route_1 = __importDefault(require("./api/negative.route"));
// create an express route:
const mainRoute = express_1.default.Router();
// express route will use /resize route for '/' route:
mainRoute.use('/', resize_route_1.default);
// express route will use /grayscale route for '/' route:
mainRoute.use('/', grayscale_route_1.default);
// express route will use /threshold route for '/' route:
mainRoute.use('/', threshold_route_1.default);
// express route will use /negative route for '/' route:
mainRoute.use('/', negative_route_1.default);
exports.default = mainRoute;
