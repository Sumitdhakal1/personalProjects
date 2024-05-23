import mongoose from 'mongoose'
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    userName:{
       type:String,
       unique:true
    },
   name:{
    type:String,
   },
   email:{
    type:String,
    unique:true
   },
   password:{
      type:String,
      select:false
   },
   date:{
    type:Date,
    default:Date.now()
   }
})


userSchema.pre('save',async function(next:CallbackWithoutResultAndOptionalError){
    const user = this
    if(!user.isModified('password')) return(next);
    try{
        const hashedPassword = await bcrypt.has(user.password,12);
        user.password = hashedPassword
        next()
    }catch(error){
        console.log(error)
    }

})

const user = mongoose.model('users', userSchema);

export default user

