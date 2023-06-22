const userRepo = require('../repositories/user.repository.js')

const Products = async () => userRepo.getProduct()

module.exports = { Products }
