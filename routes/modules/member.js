const express = require('express')
const router = express.Router()

// 引入 Account model
const Account = require('../../models/account')

router.post('/', (req, res) => {
  // 從 req.body 取得表單資料
  const memberData = req.body
  const { email, password } = memberData

  // 從 Account model 取得所有資料
  Account.find()
    .lean()
    .then((accounts) => {
      // 將 Account model 取得的所有[ {資料} ]
      // 一一比對，每筆資料的 email & password 與表單取得的 email & password
      // 將比對結果暫存在 user 變數裡
      const user = accounts.find((item) => {
        return (item.email === email) && (item.password === password)
      })

      // 如果 user 是有資料，表示 email & password 結果吻合
      if (user !== undefined) {
        // 把 user 的 firstName 建立到取得的表單裡面
        memberData.firstName = user.firstName
        // 結果吻合，所以回傳 member 頁面
        return res.render('member', { memberData })
      } else {
        // 結果不匹配，回傳 index 頁面，並告知"有資料錯誤"
        return res.render('index', { memberData, message: 'message' })
      }
    })
    // 錯誤提醒處理
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router