import mongoose, { Schema } from "mongoose"

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: true
    },
    imageUrl:{
        type:String,
        required:true
    }
},{timestamps:true})

const Projects = mongoose.model("projects",projectSchema)

export {Projects};