import express from "express";
import { userRouter } from "./users/user.routes.js";
import { productRouter } from "./products/product.routes.js";
import { orderRouter } from "./orders/order.routes.js";
import { adminRouter } from "./admin/admin.routes.js";
import { loginRouter } from "./login/login.routes.js";
import { homeRouter } from "./home/home.routes.js";
import StatusCodes from "../helpers/StatusCodes.js";
import createError from "http-errors";

export const router = express.Router();

router.use("/", homeRouter);
router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/admin", adminRouter);
router.use("/login", loginRouter);

// Catch 404 as last route
router.use("*", (req, res, next) => next(createError(StatusCodes.NOT_FOUND)));
