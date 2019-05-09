const Tool = require('../models/Tool')

class ToolController {
  async index (req, res) {
    const filters = {}

    const { tag } = req.query

    if (tag) {
      filters.tags = new RegExp(tag, 'i')
    }

    try {
      const tools = await Tool.paginate(filters, {
        page: req.query.page || 1,
        limit: 20,
        populate: ['author'],
        sort: '-createdAt'
      })
      return res.json(tools)
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'An error occurred while fetching tools' })
    }
  }

  async show (req, res) {
    const { id } = req.params
    try {
      const tool = await Tool.findById(id)
      if (tool) {
        return res.json(tool)
      } else {
        return res.status(404).json({ error: 'Tool not found' })
      }
    } catch (error) {
      return res.status(404).json({ error: 'Tool not found' })
    }
  }

  async store (req, res) {
    try {
      const tool = await Tool.create(req.body)
      return res.json(tool)
    } catch (error) {
      return res.status(405).json({ error: 'Invalid input' })
    }
  }

  async update (req, res) {
    const { id } = req.params
    try {
      const tool = await Tool.findByIdAndUpdate(id, req.body, {
        new: true // returns tool with updated data
      })
      if (tool) {
        return res.json(tool)
      } else {
        return res.status(404).json({ error: 'Tool not found' })
      }
    } catch (error) {
      return res.status(404).json({ error: 'Tool not found' })
    }
  }

  async destroy (req, res) {
    const { id } = req.params
    try {
      const tool = await Tool.findByIdAndDelete(id)
      if (tool) {
        return res.json({ message: 'Success deleting tool' })
      } else {
        return res.status(404).json({ error: 'Tool not found' })
      }
    } catch (error) {
      return res.status(404).json({ error: 'Tool not found' })
    }
  }
}

module.exports = new ToolController()
