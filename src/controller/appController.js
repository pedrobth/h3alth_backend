const { Router } = require('express');
const appService = require ('../service/appService');


const appController = Router();

appController.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const registerResponse = await appService(body);
    console.log(registerResponse)
    const { message, status, authentication } = registerResponse;
    return res.status(status).json({ message, authentication });
  }
  catch(error) {
    console.log(`ERROR @appController: ${error}`);
    return next(error);
  }
});

module.exports = appController;
