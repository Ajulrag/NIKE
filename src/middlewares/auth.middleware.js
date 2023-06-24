const findUserByEmail = require('../repositories/auth.repository.js')
const { decrypt } = require('../utils/encryption-util.js')
const UnAuthorizedException = require('../utils/errors/UnAuthorized.js')
const { catchAsync } = require('../utils/errors/catchAsync.js')
const { getToken, tokenTypes } = require('../utils/token-util.js')

const tokenAuthentication = catchAsync(async (req, res, next) => {
  const authorizationHeader = req.headers.authorization
  if (!authorizationHeader) {
    throw new UnAuthorizedException('Authorization header is missing')
  }

  const tokenFromHeaders = authorizationHeader.replace('Bearer', '').replace(/"/g, '').trim()
  const decryptedToken = decrypt(tokenFromHeaders)
  const verifiedToken = getToken(decryptedToken)
  const user = await findUserByEmail(verifiedToken.user)

  if (verifiedToken.tokenType !== tokenTypes.ACCESS_TOKEN || !user) {
    throw new UnAuthorizedException('Invalid token or user not found')
  }

  req.user = user.email
  next()
})

module.exports = {
  tokenAuthentication
}
