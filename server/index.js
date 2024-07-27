import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/food-route.js";
import userRouter from "./routes/user-route.js";
import cartRouter from "./routes/cart-route.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
