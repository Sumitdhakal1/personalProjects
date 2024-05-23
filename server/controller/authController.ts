import { Request,Response,NextFunction } from "express";
import AppError from "../utils/error/AppError";
import {isEmailValid, passwordValidator} from '../utils/validator'
import User from "../model/userModel";
import { catchAsync } from "../utils/error/catchAsync";
export const signup =catchAsync(async (req: Request, res: Response, next:NextFunction) => {

      const { email, password} = req.body
      if (!email || !password) {
       return next (new AppError('please enter your email or password', 401))
  
      }
       if(password.length < 8){
        return next(new AppError('Password length must be greater than 8',500))
       }
      const emailError = isEmailValid(email)
      if(emailError){
        return next(new AppError(emailError, 401))
      }
       const passwordError = passwordValidator(password)
       if(passwordError){
        return next (new AppError(passwordError,401))
       }
      const newUser = await User.create({ email, password})
  
  
          res.status(201).json({
        status: 'success',
        data: {
          user: newUser
  
        }
      }) 
  })