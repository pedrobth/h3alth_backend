const statusMessages = {
  apiError: {
    status: 500, message: 'internal server error', authentication: false
  },
  invalidInputs: {
    status: 400, message: 'check your inputs and try it again', authentication: false
  },
  jwtMalformed: {
    status: 401, message: 'expired or invalid Token', authentication: false
  },
  missingAuthToken: {
    status: 401, message: 'token not found', authentication: false
  }
}

module.exports = statusMessages;