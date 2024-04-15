
import express from "express";
import { rfq } from "../controllers/rfq.js";

const router = express.Router();


router.post("/RFQ", rfq);


export default router;
