// user routes
import express from "express";
import { getUser, addUser } from "./user.controller.js";
import { getAuth, hashPassword } from "../../middleware/authentication.js";

export const userRouter = express.Router();

userRouter.get("/", getAuth, getUser);

userRouter.post("/", addUser);
