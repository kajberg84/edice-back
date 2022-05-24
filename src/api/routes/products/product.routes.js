// products routes
import express from 'express';
import ProductController from './product.controller.js';

export const productsRouter = express.Router();

productsRouter.get('/', ProductController.getAllProducts);
productsRouter.get('/slug', ProductController.getProductWithSlug);
productsRouter.get('/:id', ProductController.getProductWithId);

productsRouter.post('/', ProductController.addProduct);

productsRouter.delete('/:id', ProductController.deleteProduct);
productsRouter.put('/:id', ProductController.updateProduct);
