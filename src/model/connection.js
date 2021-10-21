const { MongoClient } = require('mongodb');
require('dotenv').config();


const dbName = process.env.DB_NAME;
const mongoDbUri = process.env.DB_URI;
const connection = async () => {
  try {
    const uriConnection = await MongoClient.connect(
      mongoDbUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    return uriConnection.db(dbName);

  } catch(error) {
    console.log(`connection ERROR: ${error}`);
    process.exit(1);
  }
};

module.exports = connection;