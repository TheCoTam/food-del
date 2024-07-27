import orderModel from "../models/order-model.js";
import userModel from "../models/user-model.js";

// placing user's order
export const placeOrder = async (req, res) => {
  const clientUrl = process.env.CLIENT_URL;
  try {
    const { userId, items, amount, address } = req.body;

    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const successUrl = `${clientUrl}/verify?success=true&orderId=${newOrder._id}`;
    const errorUrl = `${clientUrl}/verify?success=false&orderId=${newOrder._id}`;

    res.json({ success: true, message: "Order Placed", successUrl, errorUrl });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

// verifying user's order
export const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.json({ success: false, message: "Order Not Found" });
    }

    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Order Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Order Failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

// user orders
export const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });

    res.json({ success: true, data: orders });
  } catch (error) {
    console.log("[Order controller]", error);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

// listing orders for admin
export const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log("[Order controller]", error);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

// updating order status
export const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log("[Order controller]", error);
    res.json({ success: false, message: "Internal Server Error" });
  }
};
