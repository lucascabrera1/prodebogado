import { Router } from "express";
import controller from "../partidos/controller.js";

const router = Router()

router.post('/agregar', controller.AgregarPartido)

export default router