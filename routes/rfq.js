
import express from "express";
import { rfq } from "../controllers/rfq.js";

const router = express.Router();


router.post("/new", rfq);


export default router;
