import { Router } from 'express';

<<<<<<< HEAD
import campeonatos from './campeonatos/index.js';
import descensos from './descensos/index.js';
import pronosticos from './pronosticos/index.js';
import copa from './copa/index.js'
=======
const campeonatos = require('./campeonatos');
const descensos = require('./descensos');
const pronosticos = require('./pronosticos');
const db = require('../Database/index')
>>>>>>> 263ac45f14296bd75f92b2dab7b6d4c29054e583

const router = Router()

router.use('/campeonatos', campeonatos)
router.use('/descensos', descensos)
router.use('/pronosticos', pronosticos)
<<<<<<< HEAD
router.use('/', copa)
=======
router.use('/', db)
>>>>>>> 263ac45f14296bd75f92b2dab7b6d4c29054e583

export default router