const { Router } = require('express')
const router = Router()
const userController = require('../controllers/user.controller.js')

router.get('/', userController.Landing)

module.exports = router
