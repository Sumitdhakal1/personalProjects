import {getOneUser,createOneUser} from '../controller/userController'
import express from 'express'
import {signup,login} from '../controller/authController'
const router = express.Router()

router.post('/user/signup',signup)
router.post('/user/login',login)
router.route('/user').get(getOneUser).post(createOneUser)

export default router