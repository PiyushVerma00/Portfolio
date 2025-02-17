import { asyncHandler } from "../utils/asyncHandler.js"

const getHomePage  = asyncHandler(async (req,res)=>{
    res.render("home")
})



export {getHomePage}