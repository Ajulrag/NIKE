const { Router } = require('express')
const router = Router()
const userController = require('../controllers/user.controller.js')

router.get('/', userController.Landing)
router.get('/shop', userController.allProducts)
router.get('/shop/product/:id', userController.getProduct)

module.exports = router
