const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const Tool = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
    exclude: true
  }
})

Tool.plugin(paginate)

module.exports = mongoose.model('Tool', Tool)
