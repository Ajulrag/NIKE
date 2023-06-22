const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  productname: {
    type: String,
    required: true
  },
  edition: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  shortDesc: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('users', userSchema)
