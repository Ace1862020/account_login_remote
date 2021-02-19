const mongoose = require('mongoose')

// 與 MongoDB 連線設定
mongoose.connect('mongodb://localhost/user-authentication', { useNewUrlParser: true, useUnifiedTopology: true })

// 暫存連線狀態
const db = mongoose.connection

// 連線失敗
db.on('error', () => {
  console.log('mongodb error!!!')
})

// 連線成功
db.once('open', () => {
  console.log('mongodb connected!!')
})

// 匯出資料庫連接狀態 db
module.exports = db