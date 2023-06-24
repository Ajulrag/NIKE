function BadRequest (message) {
  const error = new Error(message || 'Bad request')
  error.status = 400
  return error
}

module.exports = {
  BadRequest
}
