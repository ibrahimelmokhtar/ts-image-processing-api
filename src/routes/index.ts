import express from 'express';
import grayScaleRoute from './api/grayscale.route';
import resizeRoute from './api/resize.route';

// create an express route:
const mainRoute = express.Router();

// express route will use /resize route for '/' route:
mainRoute.use('/', resizeRoute);

// express route will use /grayscale route for '/' route:
mainRoute.use('/', grayScaleRoute);

export default mainRoute;
