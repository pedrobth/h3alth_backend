const getConnection = require('./connection');

const registerUserModel = async ({
  firstName,
  lastName,
  birthdate,
  addresses,
}) => {
  try {
    const connection = await getConnection();
    const insertionResponse = await connection.collection('users')
      .insertOne({
        firstName,
        lastName,
        birthdate,
        addresses,
      });
    return insertionResponse;
  } catch (error) {
    console.log(`registerUserModel ERROR: ${error}`)
    return [{ status: 500, message: 'insertion error', error }];
  }
};

module.exports = registerUserModel;
