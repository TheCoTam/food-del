import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://hoangtheanh:qZD8s8pX0re3kiRW@cluster0.ihpkken.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB is connected");
    });
};
