import app from './index'
import {config as dotenvConfig} from 'dotenv'
import {connectToMongooseDB} from './database/database'
dotenvConfig({path:"./config.env"})
const port = process.env.PORT

async function startServer(){
    await connectToMongooseDB()
    app.listen(port,()=>{
        console.log(`server is running in port ${port}`)
    })
}

startServer()