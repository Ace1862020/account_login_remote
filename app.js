const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Account = require('./models/account')

const port = 3000
const app = express()

mongoose.connect('mongodb://localhost/user-authentication', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!!!')
})

db.once('open', () => {
  console.log('mongodb connected!!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/member', (req, res) => {
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

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})