import mongoose, { Schema } from "mongoose";


const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true
    },
    message:{
        type:String,
        required :true
    }
},{timestamps:true})



const Contact = mongoose.model("contact",contactSchema)






export {Contact}