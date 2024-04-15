import express from "express";
import cookieParser from "cookie-parser";
import rfqRouter from './routes/rfq.js'
import userRouter from './routes/user.js'
import { config } from "dotenv";
import cors from 'cors'

export const app = express();

config({
  path: "./data/config.env",
})


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [process.env.FRONTEND_URI],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))



app.use("/api/v1", rfqRouter);
app.use("/api/v1/user", userRouter);


app.get("/", (req, res) => {
  res.send("Nice");
})
