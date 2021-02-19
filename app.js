// 引入套件
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
const port = 3000
const app = express()

// 引用並執行 mongoose
require('./config/mongoose')

// 設定 template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定 每筆 request 都要經過 body-parser 前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// 將 request 導入路由器
app.use(routes)

// 設定應用程式監聽連接埠號
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})