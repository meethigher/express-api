import express from "express"
import {getAllUser} from "./user_ctrl.js";
let router = new express.Router();
router.get("/user",getAllUser);

export default router;
