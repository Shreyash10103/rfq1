import express from "express";
import cookieParser from "cookie-parser";
import rfqRouter from './routes/rfq.js'
import { config } from "dotenv";
import cors from "cors";


export const app = express();

config({
  path: "./data/config.env",
})
//Using middleware

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/rfq", rfqRouter);
app.use(cors({
  origin: [process.env.FRONTEND_URI],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))

app.get("/", (req, res) => {
  res.send("Nice");
})
