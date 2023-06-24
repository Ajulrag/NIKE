const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')
const path = require('path')
const session = require('express-session')
const dotenv = require('dotenv')
const MongoStore = require('connect-mongodb-session')(session)
const userRoutes = require('./routes/user.routes.js')
const adminRoutes = require('./routes/admin.routes.js')
const authRoutes = require('./routes/auth.routes.js')

dotenv.config()

const sessionStore = new MongoStore({
  uri: process.env.MONGO_URL,
  collection: 'sessions'
})

app.use(logger('dev'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  next()
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 1 * 60 * 60 * 1000 },
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}))

app.use('/', userRoutes)
app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)

module.exports = {
  app
}
