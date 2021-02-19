// 載入 Account 
const Account = require('../account')

// 載入 users.json 範本資料
const accountList = require('../../public/users.json')

// 載入 資料庫連線狀態
const db = require('../../config/mongoose')

// 新增種子資料
db.once('open', () => {

  accountList.forEach((data) => {
    Account.create({
      firstName: data.firstName,
      email: data.email,
      password: data.password
    })
  })

  console.log('The simulated Users data is created')
})