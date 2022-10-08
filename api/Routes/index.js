import { Router } from 'express';

import campeonatos from './campeonatos/index.js';
import descensos from './descensos/index.js';
import pronosticos from './pronosticos/index.js';
import copa from './copa/index.js'
import usuario from './Users/index.js'
import fecha from './fechas/index.js';
import equipos from './equipos/index.js';

const router = Router()

router.use('/campeonatos', campeonatos)
router.use('/descensos', descensos)
router.use('/pronosticos', pronosticos)
router.use('/copas', copa)
router.use('/usuarios', usuario)
router.use('/fechas', fecha)
router.use('/equipos', equipos)

export default router