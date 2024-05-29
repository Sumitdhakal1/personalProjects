import express from 'express'
import {getAll} from '../controller/pokeApiController'
const router = express.Router()

router.route('/poke-api').get(getAll)

export default router