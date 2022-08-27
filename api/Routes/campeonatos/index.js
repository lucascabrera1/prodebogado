import { Router } from 'express'
import controller from './controller.js'

const router = Router()

<<<<<<< HEAD
router.route('/campeonatos').get(controller.listarcampeonatos)
export default router
=======
router.route('/campeones').get(controller.listarcampeones)
router.route('/cargarcampeones').post(controller.cargarcampeones)

module.exports = router
>>>>>>> 263ac45f14296bd75f92b2dab7b6d4c29054e583
