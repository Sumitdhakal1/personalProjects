import { Request,Response,NextFunction } from "express";
import { catchAsync } from "../utils/error/catchAsync";


export const getAll =(Model:any)=>{
   return catchAsync(async(req:Request, res:Response)=>{
       const user = await Model.find({})

       res.status(200).json({
        status:'success',
        data:{
            user
        }
       })
   } )
}

export const createOne =(Model:any)=>{
    return catchAsync(async (req:Request,res:Response)=>{
          const newUser = await Model.Create(req.body)

          res.status(200).json({
            status:'success',
            data:{
                user:newUser
            }
          })
    })
}