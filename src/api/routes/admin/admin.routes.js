//Admin routes
import express from "express";
import {
  getAll,
  getAdmin,
  addAdmin,
  updateAdmin,
  deleteAdmin,
} from "./admin.controller.js";
import {
  authenticateAdmin,
  authenticateJWT,
} from "../../middleware/authentication.js";

export const adminRouter = express.Router();

adminRouter.get("/", authenticateJWT, authenticateAdmin, getAll);

adminRouter.get("/:id", authenticateJWT, authenticateAdmin, getAdmin);

adminRouter.post("/", authenticateJWT, authenticateAdmin, addAdmin);

adminRouter.put("/:id", authenticateJWT, authenticateAdmin, updateAdmin);

adminRouter.delete("/:id", authenticateJWT, authenticateAdmin, deleteAdmin);
