const routes = require('express').Router()
const ToolController = require('./app/controllers/ToolController')
const UserController = require('./app/controllers/UserController')
const AuthController = require('./app/controllers/AuthController')
const authMiddleware = require('./app/middlewares/auth.js')

/* -- Tools -- */
routes.get('/tools', ToolController.index)
routes.get('/tools/:id', ToolController.show)
routes.post('/tools', authMiddleware, ToolController.store)
routes.put('/tools/:id', authMiddleware, ToolController.update)
routes.delete('/tools/:id', authMiddleware, ToolController.destroy)

/* -- Users -- */
routes.get('/users/:id', authMiddleware, UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', authMiddleware, UserController.update)

/* -- Login -- */
routes.post('/login', AuthController.login)

module.exports = routes
