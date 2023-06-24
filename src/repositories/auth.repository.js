const userModel = require('../models/user.models.js')

const findUserByEmail = async (email) => userModel.findOne({ email })
const findUserWithPass = async (email) => userModel.findOne({ email }).select('+hashPassword')
const createNewUser = async (user) => userModel.create(user)

module.exports = {
  findUserByEmail,
  findUserWithPass,
  createNewUser
}
