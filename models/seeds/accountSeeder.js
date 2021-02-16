const mongoose = require('mongoose')
const Account = require('../account')
const accountList = require('../../public/users.json')


mongoose.connect('mongodb://localhost/user-authentication', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose error!!!')
})

db.once('open', () => {
  console.log('mongodb connected!!')

  accountList.users.forEach((data) => {
    Account.create({
      firstName: data.firstName,
      email: data.email,
      password: data.password
    })
  })

  console.log('done.')
})