import express from "express";
import { loginUser } from "./login.controller.js";

export const loginRouter = express.Router();

loginRouter.post("/", loginUser);

//create login controller
//create function loginUser.
//FindOne user, req.body.email
//checkPassword function from auth password: req.body.password,  const response hash
// if (!match) throw error else res.status(201).json({name, email, address, phone, city})
