import { Router } from 'express'
import controller from './controller.js'

const router = Router()

router.route('/descensos').get(controller.listardescensos)

export default router