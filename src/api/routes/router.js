// Eventuellt samla routes i denna fil

import express from "express";
import { userRouter } from "./users/user.routes.js";
import { loginRouter } from "./login/login.routes.js";
import { adminRouter } from "./admin/admin.routes.js";
import { orderRouter } from "./orders/order.routes.js";
import { productRouter } from "./products/product.routes.js";

export const router = express.Router();

router.use("/user", userRouter);

router.use("/login", loginRouter);

router.use("/admin", adminRouter);

router.use("/order", orderRouter);

router.use("/product", productRouter);

//skapa en /logout
