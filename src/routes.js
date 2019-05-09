const routes = require('express').Router()
const ToolController = require('./app/controllers/ToolController')

routes.get('/tools', ToolController.index)
routes.get('/tools/:id', ToolController.show)
routes.post('/tools', ToolController.store)
routes.put('/tools/:id', ToolController.update)
routes.delete('/tools/:id', ToolController.destroy)

module.exports = routes
