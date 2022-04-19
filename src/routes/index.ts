import express from "express";
import resizeRoute from "./api/resize";


// create an express route:
const mainRoute = express.Router();

// express route will use resize route for '/' route:
mainRoute.use('/', resizeRoute);

export default mainRoute;
