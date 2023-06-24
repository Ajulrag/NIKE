const { Router } = require('express')
const router = Router()
const adminController = require('../controllers/admin.controller.js')
const imageUpload = require('../middlewares/imageUpload.js')

router.get('/', adminController.products)
router.get('/addproduct', adminController.getAddProduct)
router.post('/addproduct', imageUpload.upload.any(), adminController.addProduct)
router.get('/editproduct/:id', adminController.getEditProduct)
router.put('/editproduct/:id', adminController.editProduct)
router.delete('/product/:id', adminController.deleteProduct)

module.exports = router
