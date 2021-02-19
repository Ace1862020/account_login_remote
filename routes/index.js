const express = require('express')
const router = express.Router()

// 引入 home 模組
const home = require('./modules/home')

// 引入 member 模組 (登入頁面路由模組)
const member = require('./modules/member')

// 將網址給符合 / 字串的 request 並導向 home 模組
router.use('/', home)

// 將網址給符合 /member 字串的 request 並導向 member 模組
router.use('/member', member)

// 匯出路由器
module.exports = router