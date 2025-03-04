import {Router} from "express"
import { contactInfo } from "../controllers/contact.controllers.js"

const router = Router()


router.route("/").post(contactInfo)






export default router