// order routes
import express from "express";
import {
  getOrder,
  getAll,
  addOrder,
  updateOrder,
  deleteOrder,
} from "./order.controller.js";

export const orderRouter = express.Router();

orderRouter.get("/", getAll);

orderRouter.get("/:id", getOrder);

orderRouter.post("/", addOrder);

orderRouter.put("/:id", updateOrder);

orderRouter.delete("/:id", deleteOrder);
