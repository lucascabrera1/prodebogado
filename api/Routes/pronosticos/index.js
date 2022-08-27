<<<<<<< HEAD
import { Router } from 'express'
import controller from './controller.js'

const router = Router()
=======
const express = require('express')
const controller = require('./controller')
const router = express.Router()
router.use(express.json())


>>>>>>> 263ac45f14296bd75f92b2dab7b6d4c29054e583

router.route('/mispronosticos').get(controller.obtenerMisPronosticos)
router.route('/pronosticos').post(controller.subirPronostico)
router.route('/pronosticos/:id').put(controller.modificarPronostico)
router.route('/mispronosticos/:idfecha').get(controller.obtenerPronosticosDeOtroParticipanteDeUnaDeterminadaFecha)
router.route('/pronosticospartido/:idpartido').get(controller.obtenerResultadosDeOtroParticipante)
router.route('/pronosticosparticipante/:idparticipante').get(controller.obtenerPronosticosDeUnPartido)

export default  router