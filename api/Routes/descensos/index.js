import { Router } from 'express'
import controller from './controller.js'

const router = Router()

router.route('/vertodos').get(controller.listardescensos)
router.route('/agregar').post(controller.AgregarDescenso)
router.route('/agregardescendido').post(controller.AgregarDescendido)

export default router