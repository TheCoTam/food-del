import userModel from "../models/user-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.json({ success: false, message: "Please fill in all fields" });
    }
    // validate email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Email is not valid" });
    }

    // check if user exists
    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return res.json({ success: false, message: "Email does not exist!" });
    }

    // check if password is correct
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid password!" });
    }

    const token = createToken(existingUser._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal server error" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user
export const registerUser = async (req, res) => {
  const { name, password, email, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.json({ success: false, message: "Passwords do not match" });
    }

    // check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "Email already in use" });
    }

    // validate email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Email is not valid" });
    }

    // validate password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    // const token = createToken(newUser._id);
    // res.json({ success: true, token });
    res.json({ success: true, message: "Registered successfully" });
    const user = await newUser.save();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal server error" });
  }
};
