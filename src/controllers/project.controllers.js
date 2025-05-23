import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { removeFromCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js";
import { Projects } from "../models/project.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { log } from "console";
import fs from "fs"
import path from "path"


// only show projects (for visitor) 
const getAllProject = asyncHandler( async (req,res)=>{
    const projects =  await Projects.find({})
    res.render("project",{projects})
 })


// add a project page (admin only)
const addProjectPage = asyncHandler(async (req,res)=>{
    res.render("admin/addProjects")   // render a form to add project
})


//  add a project (admin only)
const addProject = asyncHandler(async (req,res)=>{
    // data from req body
    // validations - not empty
    // check for image 
    //  upload them on cloudinary
    // create project in db
//    return res

    const {title,description} = req.body
    if(!title || !description){
        throw new ApiError(400,"required all fields")
    }

    const imageLocalPath = req.file?.path
    if(!imageLocalPath){
        throw new ApiError(400,"image file is required")
    }
    
    
    if (!fs.existsSync(imageLocalPath)) {
        throw new ApiError(400, "Uploaded file not found.");
    }
    console.log("Uploading image:", imageLocalPath);
   
//     const absolutePath = path.resolve(imageLocalPath);
// const image = await uploadOnCloudinary(absolutePath);


    const image = await uploadOnCloudinary(imageLocalPath)

    if(!image){
        throw new ApiError(400,"error while uploading image")
    }

    const project =  await Projects.create({
        title,
        description,
        imageUrl: image.url
    })

   return res.redirect("/admin")
})


// delete a project (admin only)
const deleteProject = asyncHandler(async(req,res)=>{
    //  need id for delete
    // project findoneanddelete(id)
    // redirect

    // find project to delete
    const id = req.params.id
   const project =  await Projects.findById(id)
    if(!project){
        throw new ApiError(404,"project not found")
    }
    //  delete from cloudinary
    await removeFromCloudinary(project.imageUrl)

    // delete from db
    await Projects.findByIdAndDelete(id);
    return res
    .status(200)
    .json(new ApiResponse(200, {}, "project deleted successfully", true));
   
})




export {addProject,addProjectPage, deleteProject,getAllProject}