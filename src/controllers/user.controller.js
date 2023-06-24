const { catchAsync } = require('../utils/errors/catchAsync.js')
const userServices = require('../services/user.services.js')
// const { success } = require('../utils/responseApi.js')

const Landing = catchAsync(async (req, res) => {
  const {
    productname,
    edition,
    size,
    price,
    shortDesc,
    image,
    image1,
    image2,
    image3,
    isFeatured
  } = req.body
  const product = await userServices.Products(productname, edition, size, price, shortDesc, image, image1, image2, image3, isFeatured)
  // res.status(201).json(success('Landing page gotted succesfully', { product }))

  res.render('landing', { product })
})

const getProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const product = await userServices.getProductById(id)
  // res.status(201).json(success('Single product page gotted succesfully', { product }))
  res.render('singleproduct', { product })
})

const allProducts = catchAsync(async (req, res) => {
  const products = await userServices.getAllProducts()
  // res.status(201).json(success('Shop page gotted succesfully', { products }))

  res.render('shop', { products })
})
module.exports = {
  Landing,
  allProducts,
  getProduct
}
