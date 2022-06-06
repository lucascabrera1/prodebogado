const express = require('express')

const campeonatos = require('./campeonatos');
const descensos = require('./descensos');
const pronosticos = require('./pronosticos');
const db = require('../Database/index')

const router = express.Router()

router.use('/campeonatos', campeonatos)
router.use('/descensos', descensos)
router.use('/pronosticos', pronosticos)
router.use('/', db)

module.exports = router