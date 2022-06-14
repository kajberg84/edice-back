// order routes
import express from "express";
import {
  getOrder,
  getAll,
  addOrder,
  updateOrder,
  deleteOrder,
} from "./order.controller.js";
import {
  authenticateAdmin,
  authenticateJWT,
} from "../../middleware/authentication.js";

export const orderRouter = express.Router();

orderRouter.get("/", authenticateJWT, getAll);

orderRouter.get("/:id", getOrder);

orderRouter.post("/", addOrder);

orderRouter.put("/:id", authenticateJWT, authenticateAdmin, updateOrder);

orderRouter.delete("/:id", authenticateJWT, authenticateAdmin, deleteOrder);
