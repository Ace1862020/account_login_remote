const mongoose = require('mongoose')

// 使用 mongoose Schema
const Schema = mongoose.Schema

// 建立 Schema 規範
const accountSchema = new Schema({
  firstName: { type: String },
  email: { type: String },
  password: { type: String }
})

// 匯出 Account 模型
module.exports = mongoose.model('Account', accountSchema)