const { catchAsync } = require('../utils/errors/catchAsync.js')
const userServices = require('../services/user.services.js')

const Landing = catchAsync(async (req, res) => {
  const {
    productname,
    edition,
    size,
    price,
    shortDesc
  } = req.body
  const product = await userServices.Products(productname, edition, size, price, shortDesc)
  res.render('landing', { product })
})

module.exports = {
  Landing
}
