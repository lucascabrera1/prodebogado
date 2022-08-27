import { Router } from 'express'
import controller from './controller.js'

const router = Router()

router.route('/mispronosticos').get(controller.obtenerMisPronosticos)
router.route('/pronosticos').post(controller.subirPronostico)
router.route('/pronosticos/:id').put(controller.modificarPronostico)
router.route('/mispronosticos/:idfecha').get(controller.obtenerPronosticosDeOtroParticipanteDeUnaDeterminadaFecha)
router.route('/pronosticospartido/:idpartido').get(controller.obtenerResultadosDeOtroParticipante)
router.route('/pronosticosparticipante/:idparticipante').get(controller.obtenerPronosticosDeUnPartido)

export default  router