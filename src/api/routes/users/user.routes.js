// user routes
import express from "express";
import {
  getAll,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "./user.controller.js";
import { getAuth, hashPassword } from "../../middleware/authentication.js";

export const userRouter = express.Router();

userRouter.get("/", getAuth, getUser);

userRouter.get("/:id", getAll);

userRouter.post("/", addUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);
