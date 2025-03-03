import { Projects } from "../models/project.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const renderAdminPage = asyncHandler(async (req,res)=>{
   const projects = await Projects.find({})
   return res.render("admin/admin",{projects})

})
export {renderAdminPage}