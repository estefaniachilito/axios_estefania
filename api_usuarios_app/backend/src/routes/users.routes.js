import { Router } from "express";
import { setUser } from "../controllers/users.controller.js";

const router = Router()

router.post("/usuarios", setUser)

export default router