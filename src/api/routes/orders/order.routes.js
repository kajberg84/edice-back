// order routes
import express from 'express';
import OrderController from './order.controller.js';

export const orderRouter = express.Router();

orderRouter.get('/', OrderController.getAllOrders);
orderRouter.get('/:id', OrderController.getOrderWithId);

orderRouter.post('/', OrderController.createOrder);

orderRouter.put('/:id', OrderController.updateOrder);
orderRouter.delete('/:id', OrderController.deleteOrder);
