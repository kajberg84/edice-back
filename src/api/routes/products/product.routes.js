//product routes
import express from "express";
import {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./product.controller.js";

export const productRouter = express.Router();

productRouter.get("/", getProduct);

productRouter.post("/", addProduct);

productRouter.put("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);
