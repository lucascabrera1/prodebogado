import { Router } from 'express'
import controller from './controller.js'

const router = Router()

router.route('/campeonatos').get(controller.listarcampeonatos)
export default router