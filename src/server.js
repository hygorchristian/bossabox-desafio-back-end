const express = require('express')
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express')
const swaggerConfig = require('./config/swagger')
require('dotenv').config()

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.routes()
  }

  database () {
    const url = process.env.DATABASE_URL
    mongoose.connect(url, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(
      '/swagger',
      swaggerUi.serve,
      swaggerUi.setup(swaggerConfig)
    )
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
