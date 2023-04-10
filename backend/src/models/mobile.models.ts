import mongoose, { Schema } from "mongoose";

const mobileDetails = new Schema({
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

export const mobileDetail = mongoose.model("mobile", mobileDetails, "mobile");
