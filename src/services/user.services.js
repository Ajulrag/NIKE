const userRepo = require('../repositories/user.repository.js')

const Products = async () => userRepo.getProduct()

const getAllProducts = async () => userRepo.getProducts()

const getProductById = async (id) => userRepo.getProductById(id)

module.exports = {
  Products,
  getAllProducts,
  getProductById
}
