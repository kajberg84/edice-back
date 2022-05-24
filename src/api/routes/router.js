import express from 'express';
import { userRouter } from './users/user.routes.js';
import { productsRouter } from './products/product.routes.js';
import { orderRouter } from './orders/order.routes.js';
import { adminRouter } from './admin/admin.routes.js';
import StatusCodes from '../helpers/StatusCodes.js';
import createError from 'http-errors';

export const router = express.Router();

router.use('/user', userRouter);
router.use('/products', productsRouter);
router.use('/orders', orderRouter);
router.use('/admin', adminRouter);

// Catch 404 as last route
router.use('*', (req, res, next) => next(createError(StatusCodes.NOT_FOUND)));

// skapa en /login
//router.use("/login", loginRouter);

//skapa en /logout
