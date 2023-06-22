const userModel = require('../models/user.models.js')

const getProduct = async () => userModel.find()

module.exports = { getProduct }
