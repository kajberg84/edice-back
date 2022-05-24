import express from "express";
import { loginUser } from "./login.controller.js";

export const loginRouter = express.Router();

loginRouter.post("/", loginUser);
