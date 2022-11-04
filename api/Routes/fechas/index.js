import { Router } from "express";
import controller from "./controller.js";

const router = Router()

router.post('/agregar', controller.AgregarFecha)
router.get('/vertodas', controller.ListarFechas)
router.get('/veruna/:id', controller.FindFechaById)


export default router