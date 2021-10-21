const appController = require('../src/controller/appController');
var express = require('express');
const { authenticationMiddleware } = require('../src/middleware');

const appRouter = express.Router();

appRouter.post('/', appController);
appRouter.get('/', authenticationMiddleware, appController);

module.exports = appRouter;
