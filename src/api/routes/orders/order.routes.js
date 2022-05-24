// order routes
import express from "express";
import {
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
} from "./order.controller.js";

export const orderRouter = express.Router();

orderRouter.get("/", getOrder);

orderRouter.post("/", addOrder);

orderRouter.put("/:id", updateOrder);

orderRouter.delete("/:id", deleteOrder);
