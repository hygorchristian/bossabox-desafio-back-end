const Tool = require('../models/Tool')

class ToolController {
  async index (req, res) {
    try {
      const tools = await Tool.find()
      return res.json(tools)
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'An error occurred while fetching tools' })
    }
  }

  async show (req, res) {}

  async store (req, res) {}

  async update (req, res) {}

  async destroy (req, res) {}
}

module.exports = new ToolController()
