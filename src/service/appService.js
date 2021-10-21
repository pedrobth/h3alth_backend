require('dotenv').config();
const jwt = require('jsonwebtoken');
const statusMessages = require('../helper/statusMessages').default;

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
  console.log(`validation: ${invalidInputs}, ${invalidInputs.length}`);
  return invalidInputs.length === 0
    ? true
    : false;
  }


const appService = async (body) => {
  try {
    const validationResponse = validateInputs(body);
    console.log(`validationResult: ${validationResponse}`)
    const JWT_SECRET = process.env.JWT_SECRET;
    return {status: 200, message: 'done'}
  }
  catch(error) {
    console.log(error)
    return (statusMessages.apiError);
  }
}

module.exports = appService;