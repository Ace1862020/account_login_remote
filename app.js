const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000
const app = express()

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