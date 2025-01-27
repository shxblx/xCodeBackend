import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
config();

import connectDb from "./config/database.js";
import userRouter from "./routes/userRoutes.js";

connectDb();
const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://xcodefrontend.onrender.com"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Access-Control-Allow-Credentials"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

const port = 4040;

app.listen(port, () => {
  console.log(`server started running on port ${port}`);
});
