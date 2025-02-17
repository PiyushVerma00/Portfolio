import { Router } from "express";
import {
  addProject,
  addProjectPage,
  deleteProject,
} from "../controllers/project.controllers.js";
import {upload} from "../middleware/multer.middleware.js";

import { renderAdminPage } from "../controllers/admin.controllers.js";
const router = Router();

router.route("/").get(renderAdminPage); //admin dashboard

router.route("/add").get(addProjectPage); // add project page

router.route("/add").post(upload.single("image"), addProject); // add project
router.route("/delete/:id").post(deleteProject); // delete project

export default router;
