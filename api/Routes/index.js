const express = require('express')

const campeonatos = require('./campeonatos')
const descensos = require('./descensos')
const pronosticos = require('./pronosticos')

const router = express()

router.use('/campeonatos', campeonatos)
router.use('/descensos', descensos)
router.use('/pronosticos', pronosticos)

module.exports =  router