import express from 'express'
import cors from 'cors'
import userRoute from './routes/userRoute'
import AppError from './utils/error/AppError'
import PokeApiRoute from './routes/pokeApiRoute'
const app =express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:' http://localhost:5173',
    methods:["GET","POST","PUT","DELETE"],
 allowedHeaders:["Content-type", "Authorization"],

}))

app.use('/api',userRoute)
app.use('/api',PokeApiRoute)
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  

export default app
