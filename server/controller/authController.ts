import { Request,Response,NextFunction } from "express";
import AppError from "../utils/error/AppError";
import {isEmailValid, passwordValidator} from '../utils/validator'
import User from "../model/userModel";
import { catchAsync } from "../utils/error/catchAsync";
import {decodeToken,createSendToken} from '../utils/jwtToken'
import bcrypt from 'bcrypt'
import cookie from 'cookie'


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

  export const login =catchAsync(async (req: Request, res: Response, next:NextFunction) => {

      const { email, password } = req.body
      if (!email || !password) {
        return next(new AppError('please provide your email or password', 401))
  
      }
      const user = await User.findOne({ email }).select('+password')
      if(!user || !(await bcrypt.compare(password, user.password)) ){
        return next(new AppError('incorrect email or password', 401))
    }
       const token = await createSendToken(user._id);
       const id = user._id
       res.setHeader('set-Cookie',cookie.serialize('name', token as string, {
        httpOnly:true,
        maxAge: 1*1000*60,
        secure:true
       }))
     res.status(200).json({
        status:'success',
        data:{
            id,
            token
        }
     })

  
  })
  
  
  export const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    
  
    if (!token) {
     return next(new AppError('You are not logged in! Please log in to get access.',404))
    }
  
   const data = process.env.JWT_SECRET as string
    decodeToken(token,data,next)
  }
  
  
   
  export const logout = async(req:Request, res:Response, next:NextFunction)=>{
  
   res.setHeader('set-Cookie',cookie.serialize('name', 'loggedOut', {
       httpOnly:true,
       maxAge: 0,
       secure:true
      }))
      res.status(200).json({
       message:'success'
      })
  
   }

   export const removeCookie = async(req:Request, res:Response, next:NextFunction)=>{
    const cookieName =res.clearCookie('name')
    
    if(!cookieName){
    return next(new AppError('You are not logged in!.',404))
    }else{
      next()
    }
    
    }
      