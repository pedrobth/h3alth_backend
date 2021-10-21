const appController = require('../src/controller/appController');
var express = require('express');

const appRouter = express.Router();

appRouter.post('/', appController);


module.exports = appRouter;
