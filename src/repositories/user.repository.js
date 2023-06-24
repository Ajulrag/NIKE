const productModel = require('../models/product.models.js')

const getProduct = async () => productModel.find({ isFeatured: true })

const getProducts = async () => productModel.find()

const getProductById = async (id) => productModel.findById(id)

module.exports = {
  getProduct,
  getProducts,
  getProductById
}
