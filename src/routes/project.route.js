import { Router } from "express";
import { getAllProject } from "../controllers/project.controllers.js";

const router = Router()

router.route("/").get(getAllProject)


export default router