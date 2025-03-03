import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/admin.model.js";


const verifyJWT = asyncHandler(async(req,res,next)=>{
    const token  = req.cookies?.adminToken

    if(!token){
        res.redirect("/admin/auth/login")
    }

    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    const admin = await Admin.findById(decodedToken?._id).select("-password")
    if(!admin){
        throw ApiError(401,"Invalid Access Token")
    }
    req.admin = admin
    next()
})

export {verifyJWT}