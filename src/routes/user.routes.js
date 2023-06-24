const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller.js')
// const Authentication = require('../middlewares/auth.middleware.js')

router.get('/login', (req, res) => {
  res.status(200).json('Authenticated')
})

router.get('/', userController.Landing)
router.get('/shop', userController.allProducts)
router.get('/shop/product/:id', userController.getProduct)

module.exports = router
