import express from "express"
import cookieParser from "cookie-parser"

const app = express()


// middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

// routes

// app.use("/api",routes)



export {app}