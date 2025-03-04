import { Contact } from "../models/contact.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import nodemailer from "nodemailer"



const contactInfo = asyncHandler(async(req,res)=>{
        const {name,email,message} = req.body;

        if(!name || !email || !message){
            throw new ApiError(400,"Required All Fields")
        }

        await Contact.create({
            name,
            email,
            message
        })

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        })


        const adminMailOptions = {
            from:process.env.EMAIL_USER,
            to:process.env.EMAIL_USER,
            subject:`New Contact Query from ${name}`,
            text:`You recieved a new query:\n\n
                    Name:${name}\n
                    Email:${email}\n
                    Message:${message}`
        }
        const visitorMailOptions ={
            from:process.env.EMAIL_USER,
            to: email,
            subject:"Thank You For Connect With Us",
            text:`Hi ${name},\n\n
                    Thank you for reaching out. We've recieved your mail and will get back to you shortly!\n\n
                    Your message:\n
                    ${message}\n\n
                    Best regards,\n Ayushi verma`
        }

        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(visitorMailOptions);

        return res
        .status(200)
        .redirect("/")


})

export {contactInfo}