import userModel from "../models/user-model.js";

// add items to user's cart
export const addToCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = await user.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log("[add-to-cart]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// remove items from user's cart
export const removeFromCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = await user.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.log("[remove-from-cart]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// fetch user's cart data
export const getCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = await user.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log("[get-cart]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};
