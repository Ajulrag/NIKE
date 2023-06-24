const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  hashPassword: {
    required: true,
    type: String,
    select: false
  },
  email: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('users', userSchema)
