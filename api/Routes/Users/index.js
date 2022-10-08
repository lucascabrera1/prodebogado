import { Router } from 'express'
import controller from './controller.js'

const router = Router()

router.post('/registrar', controller.AltaUsuario)
router.get('/vertodos', controller.ListarTodos)
router.get('/veruno/:userId', controller.VerUno)

export default router