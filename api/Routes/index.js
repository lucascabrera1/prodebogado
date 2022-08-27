import { Router } from 'express';

import campeonatos from './campeonatos/index.js';
import descensos from './descensos/index.js';
import pronosticos from './pronosticos/index.js';
import copa from './copa/index.js'

const router = Router()

router.use('/campeonatos', campeonatos)
router.use('/descensos', descensos)
router.use('/pronosticos', pronosticos)
router.use('/', copa)

export default router