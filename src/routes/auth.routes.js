const { Router } = require('express')
const router = Router()
const controller = require('../controllers/auth.controller.js')
const Authentication = require('../middlewares/auth.middleware.js')

router.post('/login', Authentication.tokenAuthentication, controller.login)
router.post('/signup', Authentication.tokenAuthentication, controller.signup)
router.post('/refresh', Authentication.tokenAuthentication, controller.tokenRefresh)

module.exports = router
