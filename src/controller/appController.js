const { Router } = require('express');
const appService = require ('../service/appService');


const appController = Router();

appController.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    // console.log('@ controller')
    const registerResponse = await appService(body);
    console.log(registerResponse)
    const { message, status } = registerResponse;
    return res.status(status).json(message);
    // return res.status(200).json('controller runnig')
  }
  catch(error) {
    console.log(`ERROR @appController: ${error}`);
    return next(error);
  }
});

module.exports = appController;
