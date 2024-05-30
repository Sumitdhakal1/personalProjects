import { catchAsync } from "../utils/error/catchAsync";
import {Request,Response} from 'express'
import pokemonDatabase from '../database/apiCall'
import ApiFeatures from '../utils/apiFeatures'

export const getAll = catchAsync(async(req:Request,res:Response)=>{
  const features =  new ApiFeatures( pokemonDatabase(req), req.query)
  const data = await features.query
  res.status(200).json({
    data
  })
})

export const getOne = catchAsync(async(req:Request, res:Response)=>{
  const query =(req.query.q as string).toLowerCase()
  console.log(`Search Query: ${query}`)
  const result = await pokemonDatabase(req)
  console.log(result)
  const data =  result.filter((item:any)=>{ 
     const itemName = item.name.toLowerCase()
     const includeQuery = itemName.includes(query)
     return includeQuery
  })
  console.log(`Filtered Data: ${JSON.stringify(data)}`);
  res.send(data)
})



