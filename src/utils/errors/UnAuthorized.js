class UnAuthorizedException extends Error {
  constructor (message) {
    super(message)
    this.name = 'UnAuthorizedException'
  }
}
module.exports = UnAuthorizedException
