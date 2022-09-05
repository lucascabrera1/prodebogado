import { Router } from 'express'
import controller from './controller.js'

const router = Router()

router.route('/listar').get(controller.listarcampeonatos)
router.route('/agregar').post(controller.AgregarCampeonato)
export default router
