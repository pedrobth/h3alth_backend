require('dotenv').config();
const jwt = require('jsonwebtoken');
const { apiError, invalidInputs } = require('../helper/statusMessages');

const validateInputs = (body) => {
  const mandatoryFields = [
    'firstName',
    'lastName',
    'birthdate',
    'addresses',
  ]
  const addressesMandatoryFields = ['street', 'number', 'city'];
  const invalidInputs = []
  
  for (const fieldDescription of mandatoryFields) {
    if (!body[fieldDescription]) invalidInputs.push(fieldDescription);
  };
  if (invalidInputs.length !== 0 || !Array.isArray(body.addresses)){
    return false;
  }
  body.addresses.forEach(addressInputs => {
    for (const addressFields of addressesMandatoryFields) {
      if(!addressInputs[addressFields]) invalidInputs.push(addressFields);
    }
  });
  return invalidInputs.length === 0
    ? true
    : false;
  }


const appService = async (body) => {
  try {
    const inputsAreValid = validateInputs(body);
    const JWT_SECRET = process.env.JWT_SECRET;
    return inputsAreValid
      ? {
        status: 201,
        message: 'created',
        authentication: jwt.sign( { id: 1 }, JWT_SECRET)
      }
      : invalidInputs;
    
  }
  catch(error) {
    console.log(`appService ERROR: ${error}`)
    return (apiError);
  }
}

module.exports = appService;