const routes = require('express').Router()
const controllers = require('./app/controllers')

routes.get('/users', (req, res) => res.send('Ok'))

module.exports = routes
