const { compare, hashSync } = require('bcrypt')
const { createNewUser, findUserByEmail, findUserWithPass } = require('../repositories/auth.repository.js')
const UserNotFound = require('../utils/errors/userNotFound.js')
const UnAuthorizedException = require('../utils/errors/UnAuthorized.js')
const BadRequest = require('../utils/errors/badRequest.js')
const { generateAccessToken, generateRefreshToken, getToken, tokenTypes } = require('../utils/encryption-util.js')
const { decrypt } = require('../utils/encryption-util.js')

const userLogin = async ({ email, password }) => {
  const student = await findUserWithPass(email)
  console.log(student)
  if (!student) throw new UserNotFound()
  const isMatch = await compare(password, student.hashPassword)
  if (!isMatch) throw new UnAuthorizedException('Invalid email or password')
  // generating jwt token and passing payload
  const accessToken = generateAccessToken(student.email)
  const refreshToken = generateRefreshToken(student.email)
  return { accessToken, refreshToken }
}

const userSignup = async (student) => {
  const isExist = await findUserByEmail(student.email)
  if (isExist) throw new BadRequest('Email already exist with another user')
  const hashPassword = hashSync(student.password, 10)
  const res = await createNewUser({ ...student, hashPassword, password: null })
  return res
}

const refreshToken = async (token) => {
  const decryptedToken = decrypt(token)
  const { tokenType, user } = getToken(decryptedToken)
  const isExist = await findUserByEmail(user)
  if (!isExist || tokenType !== tokenTypes.REFRESH_TOKEN) throw new UnAuthorizedException('Provided refresh token is invalid')
  return generateAccessToken(isExist.email)
}

module.exports = {
  userLogin,
  userSignup,
  refreshToken
}
