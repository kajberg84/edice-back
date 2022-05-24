//Admin routes
import express from "express";
import {
  getAllAdmins,
  getAdmin,
  addAdmin,
  updateAdmin,
  deleteAdmin,
} from "./admin.controller.js";

export const adminRouter = express.Router();

adminRouter.get("/", getAll);

adminRouter.get("/:id", getAdmin);

adminRouter.post("/", addAdmin);

adminRouter.put("/:id", updateAdmin);

adminRouter.delete("/:id", deleteAdmin);
