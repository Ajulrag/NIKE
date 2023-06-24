const adminRepo = require('../repositories/admin.repository.js')

const getAllProducts = async () => adminRepo.getAllProducts()

const addNewProduct = async (productname, edition, size, price, shortDesc, image, image1, image2, image3, isFeatured) => {
  return adminRepo.addNewProduct({
    productname, edition, size, price, shortDesc, image, image1, image2, image3, isFeatured
  })
}

const getProduct = async (id) => adminRepo.getProductById(id)

const editProduct = async (id, productname, edition, size, price, shortDesc, image, image1, image2, image3, isFeatured) => {
  const existingProduct = await adminRepo.getProductById(id)

  if (!existingProduct) {
    throw new Error('Product not found')
  }

  existingProduct.productname = productname
  existingProduct.edition = edition
  existingProduct.size = size
  existingProduct.price = price
  existingProduct.shortDesc = shortDesc
  existingProduct.image = image
  existingProduct.image1 = image1
  existingProduct.image2 = image2
  existingProduct.image3 = image3
  existingProduct.isFeatured = isFeatured

  const updatedProduct = await adminRepo.updateProduct(id, existingProduct)

  return updatedProduct
}

const deleteProduct = async (id) => adminRepo.deleteProductById(id)

module.exports = {
  getAllProducts,
  addNewProduct,
  getProduct,
  editProduct,
  deleteProduct
}
