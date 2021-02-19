const Account = require('../account')
const accountList = require('../../public/users.json')
const db = require('../../config/mongoose')

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