import { Router } from "express";
import controller from "../equipos/controller.js";

const router = Router()

router.post('/agregar', controller.AgregarEquipo)
router.get('/vertodos', controller.ListarEquipos)

export default router