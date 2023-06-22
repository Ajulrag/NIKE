const { app } = require('../app')
const dotenv = require('dotenv')
const { dbConnect } = require('./db')

dotenv.config()

const PORT = process.env.PORT || 3000

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
