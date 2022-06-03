// user routes
import express from "express";
import {
  getAll,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "./user.controller.js";
import {
  authenticateAdmin,
  authenticateJWT,
  hashPassword,
} from "../../middleware/authentication.js";

export const userRouter = express.Router();

userRouter.get("/:id", authenticateJWT, getUser);

userRouter.get("/", authenticateJWT, authenticateAdmin, getAll);

userRouter.post("/", addUser);

userRouter.put("/:id", authenticateJWT, updateUser);

userRouter.delete("/:id", authenticateJWT, deleteUser);
