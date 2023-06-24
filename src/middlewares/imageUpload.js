const multer = require('multer')
const path = require('path')

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads'))
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname
    cb(null, name)
  }
})

const upload = multer({
  storage: multerStorage
})

module.exports = {
  upload
}
