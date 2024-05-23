import {getOneUser,createOneUser} from '../controller/userController'
import express from 'express'

const router = express.Router()

router.route('/user').get(getOneUser).post(createOneUser)

export default router