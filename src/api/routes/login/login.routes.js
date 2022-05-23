import express from "express";

export const loginRouter = express.Router();

userRouter.post("/", loginUser);

//create login controller
//create function loginUser.
//FindOne user, req.body.email
//checkPassword function from auth password: req.body.password,  const response hash
// if (!match) throw error else res.status(201).json({name, email, address, phone, city})
