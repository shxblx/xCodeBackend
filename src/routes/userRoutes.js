import { Router } from "express";
import { signup } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.post("/signup", signup);

export default userRouter;
