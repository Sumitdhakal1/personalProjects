import {config} from 'dotenv'
import mongoose from 'mongoose';
config({path:'./config.env'})

const url = process.env.DATABASE as string



let server:any;
export const connectToMongooseDB = async ()=>{
    if(!server){
        try{
          mongoose.connection.on('connected',()=>console.log('connected to mongoose Database successfully'));
          mongoose.connection.on('disconnected',()=>console.log('disconnected from mongoose Database'));
          mongoose.connection.on('reconnected', () => console.log('reconnected to mongoose Database'));
          mongoose.connection.on('disconnecting', () => console.log('disconnecting from mongoose Database'));

          server = await mongoose.connect(url)

        

        }catch(error){
         console.log(error)
        }
    }
    return server
}

export const getConnectedClient = () => server