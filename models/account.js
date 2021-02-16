const mongoose = require('mongoose')
const Schema = mongoose.Schema
const accountSchema = new Schema({
  firstName: { type: String },
  email: { type: String },
  password: { type: String }
})

module.exports = mongoose.model('Account', accountSchema)