import { catchAsync } from "../utils/error/catchAsync";
import {Request,Response} from 'express'
import pokemonDatabase from '../database/apiCall'
import ApiFeatures from '../utils/apiFeatures'

export const getAll = catchAsync(async(req:Request,res:Response)=>{
  const data = await pokemonDatabase()
  res.status(200).json({
    data
  })
})



