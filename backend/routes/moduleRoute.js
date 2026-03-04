import express from "express";
import { module1, module2 } from "../controllers/moduleController";
const router = express.Router();
router.post("/module1",module1);
router.post("/module2",module2);
export default router;