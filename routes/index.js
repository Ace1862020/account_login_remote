const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const member = require('./modules/member')

router.use('/', home)
router.use('/member', member)

module.exports = router