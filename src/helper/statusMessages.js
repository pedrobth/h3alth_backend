const statusMessages = {
  apiError: {
    status: 500, message: 'internal server error', authentication: false
  },
  invalidInputs: {
    status: 400, message: 'check your inputs and try it again', authentication: false
  }
}

module.exports = statusMessages;