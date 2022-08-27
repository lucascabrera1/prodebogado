import express from "express";
import controller from "./controller.js";

const router = express.Router()

router.get('/copa', controller.EntraACopa)

export default router