import { Admin } from "../models/admin.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt"

const renderLoginPage = asyncHandler(async (req, res) => {
    if(req.cookies?.adminToken){
       
    
        return res.redirect("/admin")
    }
   return res.render("admin/login"); // This renders `views/admin/login.ejs`
});

const adminLogin = asyncHandler(async(req,res)=>{
    //  data from req bdy
    // validate data - all fields required
    // data check krenge db m agr ni h to credentials not found
    //  generate krenge token 
    // send cookie
    const {email,password} = req.body;

    if(!email || !password){
        throw new ApiError(400,"Both Email and Password are required")
    }
   const admin =  await Admin.findOne({email});

   

    if(!admin){
        throw new ApiError(401,"Invalid Credentials")
    }
   
    const isPasswordValid = await admin.isPasswordCorrect(password)
    if(!isPasswordValid){
        throw new ApiError(401,"Invalid Credentials")
    }

    const token = admin.generateToken()

    const options = {
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        maxAge: 5* 24*60*60*1000,    //5days
        // sameSite: "strict"
    }

    return res
    .status(200)
    .cookie("adminToken",token,options)
    // .json(new ApiResponse(200,{token},"Admin Logged in successfully"))
    .redirect('/admin')
})

const adminLogout = asyncHandler( async(req,res)=>{
    const options = {
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        expires: new Date(0)
    }

    return res
    .status(200)
    .clearCookie("adminToken", options)
    // .json(new ApiResponse(200,{},"Logged Out Successfully"))
    .redirect('/admin/auth/login')
})

export {adminLogin, adminLogout,renderLoginPage}