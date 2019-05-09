const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    exclude: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    exclude: true
  }
})

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 8)
})

UserSchema.methods = {
  compareHash (password) {
    return bcrypt.compare(password, this.password)
  }
}

UserSchema.statics = {
  generateToken ({ id }) {
    const { JWT_SECRET, JWT_TTL } = process.env
    return jwt.sign({ id }, JWT_SECRET, {
      expiresIn: JWT_TTL
    })
  }
}

module.exports = mongoose.model('User', UserSchema)
