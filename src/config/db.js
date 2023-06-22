const mongoose = require('mongoose')

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Database connected successfully')
  } catch (error) {
    console.log('Database connection failed')
    console.error(error)
  }
}

mongoose.set('strictQuery', true)
module.exports.dbConnect = dbConnect
