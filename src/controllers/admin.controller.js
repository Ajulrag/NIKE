const { catchAsync } = require('../utils/errors/catchAsync.js')
const adminServices = require('../services/admin.services.js')
const { success } = require('../utils/responseApi.js')

const products = catchAsync(async (req, res) => {
  const products = await adminServices.getAllProducts()
  res.status(201).json(success('Admin Product page gotted succesfully', { products }))
})

const getAddProduct = catchAsync(async (req, res) => {
  res.status(201).json(success('Add product page gotted succesfully'))
//   res.render('addproduct')
})

const addProduct = catchAsync(async (req, res) => {
  const {
    productname,
    edition,
    size,
    price,
    shortDesc,
    isFeatured
  } = req.body
  const images = req.files.map(file => file.path)
  const product = await adminServices.addNewProduct(
    productname,
    edition,
    size,
    price,
    shortDesc,
    images,
    isFeatured
  )
  res.status(201).json(success('Product added successfully', { product }))
})

const getEditProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const product = await adminServices.getProduct(id)
  console.log(product)
  res.status(201).json(success('Edit product page gotted succesfully', { product }))
})

const editProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const {
    productname,
    edition,
    size,
    price,
    shortDesc,
    isFeatured
  } = req.body
  const images = req.files.map(file => file.path)
  const updatedProduct = await adminServices.editProduct(
    id,
    productname,
    edition,
    size,
    price,
    shortDesc,
    images,
    isFeatured
  )

  res.status(200).json(success('Product updated successfully', { product: updatedProduct }))
})

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const deletedProduct = await adminServices.deleteProduct(id)
  res.status(200).json(success('Product deleted successfully', { deletedProduct }))
})

module.exports = {
  products,
  getAddProduct,
  addProduct,
  getEditProduct,
  editProduct,
  deleteProduct
}
