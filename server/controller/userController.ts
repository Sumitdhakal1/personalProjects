import User from '../model/userModel'
import {getAll,createOne} from './factoryHandler'
export const getOneUser = getAll(User)
export const createOneUser = createOne(User)