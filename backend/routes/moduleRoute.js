import express from "express";
import { module1, module3 } from "../controllers/moduleController.js";
const router = express.Router();
router.post("/module1",module1);
router.post("/module3",module3);
export default router;