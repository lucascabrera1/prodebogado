const express = require ('express')
const controller = require('./controller')

const router = express()

router.route('/campeones').get(controller.listarcampeones)
router.route('/cargarcampeones').post(controller.cargarcampeones)

module.exports = router