import mongoose, { Schema } from "mongoose";

const cartDetails = new Schema({
  modelname: String,
  link: String,
  description: String,
  specs: {
    color: String,
    Size: String,
    Style: String,
  },
  cost: Number,
  stock: String,
});

export const cartDetail = mongoose.model("cart", cartDetails, "cart");
