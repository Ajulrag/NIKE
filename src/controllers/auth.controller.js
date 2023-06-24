const { refreshToken, userLogin, userSignup } = require('../services/auth.services.js')
const BadRequest = require('../utils/errors/badRequest.js')
const { catchAsync } = require('../utils/errors/catchAsync.js')
const { success } = require('../utils/responseApi.js')
const schema = require('../utils/validations/auth.schema.js')

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body
  const { error, value } = schema.loginSchema.validate({ email, password })
  if (error) throw new BadRequest(error.details[0].message)
  const token = await userLogin(value)
  res.status(200).json(success('OK', { token }))
})

const signup = catchAsync(async (req, res) => {
  const {
    name, email, password
  } = req.body
  const { error, value } = schema.signupSchema.validate({
    name, email, password
  })
  if (error) throw new BadRequest(error.message)
  await userSignup(value)
  res.status(201).json(success('CREATED'))
})

const tokenRefresh = catchAsync(async (req, res) => {
  const refreshTokenFromHeaders = req.headers.authorization.replace('Bearer', '').replace(/"/g, '').trim()
  const token = await refreshToken(refreshTokenFromHeaders)
  res.status(200).json(success('OK', { token }))
})

module.exports = {
  login,
  signup,
  tokenRefresh
}
