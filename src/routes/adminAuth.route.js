import { Router } from "express";
import { adminLogin,adminLogout,renderLoginPage } from "../controllers/adminAuth.controllers.js";
const router = Router()

// router.get("/test", (req, res) => {
//     res.send("Admin Auth Route Working ✅");
// });
router.route("/login").get(renderLoginPage)
router.route("/login").post(adminLogin)
router.route("/logout").post(adminLogout)

export default router