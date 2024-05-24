import User from '../model/userModel'
import { Request,Response,NextFunction } from 'express'
import {getAll,createOne} from './factoryHandler'
import AppError from '../utils/error/AppError'
import { catchAsync } from '../utils/error/catchAsync'

export const getOneUser = getAll(User)
export const createOneUser = createOne(User)


export const updatedMe =catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.password) {
        return next(
            new AppError('This route is not for password updates. Please use /updateMyPassword.', 400)
        )
    }

    const object = req.body
    

    const updateUser = await User.findByIdAndUpdate(req.params.id, object, {
        new: true,
        runValidation: true
    });
    res.status(200).json({
        data: {
            user: updateUser
        }
    })
})
