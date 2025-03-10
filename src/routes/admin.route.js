import { Router } from "express";
import {
  addProject,
  addProjectPage,
  deleteProject,
} from "../controllers/project.controllers.js";
import {upload} from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

import { renderAdminPage } from "../controllers/admin.controllers.js";
const router = Router();

router.route("/").get(verifyJWT,renderAdminPage); //admin dashboard

router.route("/add").get(addProjectPage); // add project page

router.route("/add").post(upload.single("image"), addProject); // add project
router.route("/delete/:id").delete(deleteProject); // delete project

export default router;
