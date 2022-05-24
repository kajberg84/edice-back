// products routes
import express from "express";
import ProductController from "./product.controller.js";

export const productRouter = express.Router();

productRouter.get("/", ProductController.getAllProducts);
productRouter.get("/slug", ProductController.getProductWithSlug);
productRouter.get("/:id", ProductController.getProductWithId);

productRouter.post("/", ProductController.addProduct);

productRouter.delete("/:id", ProductController.deleteProduct);
productRouter.put("/:id", ProductController.updateProduct);
