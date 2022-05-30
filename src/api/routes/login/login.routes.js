import express from "express";
import { loginUser, loginAdmin } from "./login.controller.js";

export const loginRouter = express.Router();

loginRouter.post("/", loginUser);
loginRouter.post("/admin", loginAdmin);
