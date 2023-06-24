const productModel = require('../models/product.models.js')

const getAllProducts = async () => productModel.find()

const addNewProduct = async (data) => productModel.create(data)

const getProductById = async (id) => productModel.findById(id)

const updateProduct = async (id, productData) => {
  return productModel.findByIdAndUpdate(id, productData, { new: true })
}

const deleteProductById = async (id) => productModel.findByIdAndDelete(id)

module.exports = {
  getAllProducts,
  addNewProduct,
  getProductById,
  updateProduct,
  deleteProductById
}
