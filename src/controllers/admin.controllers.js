import { Projects } from "../models/project.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const renderAdminPage = asyncHandler(async (req,res)=>{
   const projects = await Projects.find({})
   return res.render("admin/admin",{projects})

// const dummyProjects = [
//     {
//         _id: "1",
//         title: "Portfolio Website",
//         description: "A sleek and modern portfolio website.",
//         image: "https://images.pexels.com/photos/18264705/pexels-photo-18264705/free-photo-of-smiling-man-in-headphones-with-microphone-using-a-apple-macbook.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         _id: "2",
//         title: "E-commerce Store",
//         description: "A simple e-commerce website with payment integration.",
//         image: "https://via.placeholder.com/150"
//     },
//     {
//         _id: "3",
//         title: "Task Manager",
//         description: "A productivity app to manage daily tasks.",
//         image: "https://via.placeholder.com/150"
//     }
// ];

// res.render("admin/admin", { projects: dummyProjects });
})
export {renderAdminPage}