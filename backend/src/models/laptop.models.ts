import mongoose, { Schema } from "mongoose";

const laptopDetails = new Schema({
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

export const laptopDetail = mongoose.model("laptop", laptopDetails, "laptop");
