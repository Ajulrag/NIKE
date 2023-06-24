function UserNotFound (message) {
  const error = new Error(message || 'user not found')
  error.status = 404
  return error
}

module.exports = {
  UserNotFound
}
