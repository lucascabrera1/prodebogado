import { Router } from 'express'
import controller from './controller.js'

const router = Router()

router.post('/registrar', controller.AltaUsuario)

export default router