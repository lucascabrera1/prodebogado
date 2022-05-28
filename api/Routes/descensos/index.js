const express = require ('express')
const controller = require('./controller')

const router = express.Router()

router.route('/descensos').get(controller.listardescensos)

module.exports = router