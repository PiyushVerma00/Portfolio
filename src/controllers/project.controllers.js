import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Projects } from "../models/project.model.js";
import { log } from "console";


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
   
    const absolutePath = path.resolve(imageLocalPath);
const image = await uploadOnCloudinary(absolutePath);


    // const image = await uploadOnCloudinary(imageLocalPath)

    if(!image){
        throw new ApiError(400,"error while uploading image")
    }

    const project =  await Projects.create({
        title,
        description,
        image: image.url
    })

   return res.redirect("/admin")
})


// delete a project (admin only)
const deleteProject = asyncHandler(async(req,res)=>{
    //  need id for delete
    // project findoneanddelete(id)
    // redirect
    const id = req.params.id
    await Projects.findByIdAndDelete(id)
    return res
    // .json(new ApiResponse(200, {}, "project deleted successfully"))
    .redirect("/admin")
})




export {addProject,addProjectPage, deleteProject,getAllProject}