const routes = require('express').Router()
const controllers = require('./app/controllers')

routes.get('/tools', controllers.ToolController.index)
routes.get('/tools/:id', controllers.ToolController.show)
routes.post('/tools', controllers.ToolController.store)
routes.put('/tools/:id', controllers.ToolController.update)
routes.delete('/tools/:id', controllers.ToolController.destroy)

module.exports = routes
