const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

const port = 3000
const app = express()

mongoose.connect('mongodb://localhost/uesr-authentication', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!!!')
})

db.once('open', () => {
  console.log('mongodb connected!!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/member', (req, res) => {
  res.render('member')
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})