import { Router } from "express";
import controller from "./controller.js";

const router = Router()

router.post('/fecha', controller.AgregarFecha)
router.get('/fecha:idfecha', controller.ListarFechas)

export default router