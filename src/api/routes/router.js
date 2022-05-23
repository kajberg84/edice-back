// Eventuellt samla routes i denna fil

import express from "express";
import { userRouter } from "./users/user.routes.js";
export const router = express.Router();

router.use("/user", userRouter);

// skapa en /login
//router.use("/login", loginRouter);

//skapa en /logout
