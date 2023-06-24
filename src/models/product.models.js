const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
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
  },
  image: {
    type: String
  },
  image1: {
    type: String
  },
  image2: {
    type: String
  },
  image3: {
    type: String
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('products', productSchema)
