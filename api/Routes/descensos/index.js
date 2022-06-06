const express = require ('express')
const controller = require('./controller')

const router = express.Router()

router.route('/descensos').get(controller.listardescensos)
router.route('/cargardescensos').post(controller.cargardescensos)

module.exports = router