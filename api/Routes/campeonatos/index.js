const express = require ('express')
const controller = require('./controller')

const router = express()

router.route('/').get()

module.exports = router