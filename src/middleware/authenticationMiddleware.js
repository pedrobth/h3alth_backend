require('dotenv').config();
const jwt = require('jsonwebtoken');
const { apiError,
  jwtMalformed,
  missingAuthToken } = require('../helper/statusMessages');

const JWT_SECRET = process.env.JWT_SECRET;

const validateToken = (token) => {
  if (!token) {
    return missingAuthToken;
  }
  try {
    const verifiedToken = jwt.verify(token, JWT_SECRET);
    return verifiedToken;
  } catch (err) {
    return jwtMalformed;
  }
};

const authenticationMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const validationRes = validateToken(authorization);
    console.log(validationRes)
    if (validationRes.authentication === false) {
      const { status, message } = validationRes;
      return res.status(status).json({ message });
    }
    const { id } = validationRes;
    req.userId = id;
    return next();
  } catch (err) {
    console.log('err @ authMiddleware: ', err);
    const { status, message } = apiError;
    return res.status(status).json(message);
  }
};

module.exports = authenticationMiddleware;