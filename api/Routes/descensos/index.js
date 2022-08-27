import { Router } from 'express'
import controller from './controller.js'

const router = Router()

router.route('/descensos').get(controller.listardescensos)
router.route('/cargardescensos').post(controller.cargardescensos)

export default router