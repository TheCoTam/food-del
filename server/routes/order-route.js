import express from "express";

import authMiddleware from "../middleware/auth.js";
import {
  placeOrder,
  userOrders,
  verifyOrder,
} from "../controllers/order-controller.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userOrders", authMiddleware, userOrders);

export default orderRouter;
