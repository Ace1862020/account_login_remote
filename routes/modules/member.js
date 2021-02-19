const express = require('express')
const router = express.Router()
const Account = require('../../models/account')

router.post('/', (req, res) => {
  const memberData = req.body
  const { email, password } = memberData

  Account.find()
    .lean()
    .then((accounts) => {
      const user = accounts.find((item) => {
        return (item.email === email) && (item.password === password)
      })

      if (user !== undefined) {
        memberData.firstName = user.firstName
        return res.render('member', { memberData })
      } else {
        return res.render('index', { memberData, message: 'message' })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router