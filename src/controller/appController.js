const { Router } = require('express');
const appService = require ('../service/appService');
const { apiError } = require('../helper/statusMessages');


const appController = Router();

appController.post('/', async (req, res) => {
  try {
    const { body } = req;
    const registerResponse = await appService(body);
    console.log(registerResponse)
    const { message, status, authentication } = registerResponse;
    return res.status(status).json({ message, authentication });
  }
  catch(error) {
    console.log(`ERROR @appController: ${error}`);
    const { message, status } = apiError;
    return res.status(status).json({ message });
  }
});

appController.get('/', async (_req, res) => {
  return res.status(200).json('You are logged in');
})

module.exports = appController;
