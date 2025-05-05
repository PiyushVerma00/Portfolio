import { Router } from "express";
import { getHomePage } from "../controllers/homepage.contoller.js";
const router = Router()

router.route('/').get(getHomePage)


export default router