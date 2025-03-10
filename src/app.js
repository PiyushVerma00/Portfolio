import express from "express"
import cookieParser from "cookie-parser"
import path from "path"
import { fileURLToPath } from "url";

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views"));
// middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"));


// routes
import homeRoute from "./routes/home.route.js"
import adminRoute from "./routes/admin.route.js"
import projectRoute from "./routes/project.route.js"
import adminAuthRoute from "./routes/adminAuth.route.js"
import contactRoute from "./routes/contact.route.js"
// app.get("/", (req,res)=>{
//     res.send("welcome to my page")
// })
app.use("/", homeRoute)
app.use("/admin", adminRoute)
app.use("/project", projectRoute)
app.use("/admin/auth",adminAuthRoute)
app.use("/contact",contactRoute)




export {app}