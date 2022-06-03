// products routes
import express from "express";
import ProductController from "./product.controller.js";
import {
  authenticateJWT,
  authenticateAdmin,
} from "../../middleware/authentication.js";

export const productRouter = express.Router();

productRouter.get("/", ProductController.getAllProducts);
productRouter.get("/slug", ProductController.getProductWithSlug);
productRouter.get("/:id", ProductController.getProductWithId);

productRouter.post(
  "/",
  authenticateJWT,
  authenticateAdmin,
  ProductController.addProduct
);

productRouter.delete(
  "/:id",
  authenticateJWT,
  authenticateAdmin,
  ProductController.deleteProduct
);
productRouter.put(
  "/:id",
  authenticateJWT,
  authenticateAdmin,
  ProductController.updateProduct
);
