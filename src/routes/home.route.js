import { Router } from "express";
import { getHomePage } from "../controllers/homepage.contoller.js";
const router = Router()

router.route('/').get(getHomePage)
// router.route('/about').get(getHomePage)
// router.route('/contact us').get(getHomePage)
// router.route('/portfolio').get(getHomePage)


export default router