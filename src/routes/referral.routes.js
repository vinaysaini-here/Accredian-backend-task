import express from "express";
import { submitReferral } from "../controllers/referral.controller.js";

const router = express.Router();

router.post("/refer", submitReferral);

export default router;
