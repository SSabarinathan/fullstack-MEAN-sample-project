import mongoose, { Schema } from "mongoose";

const newUserDetails = new Schema({
  text: String,
  email: String,
  password: String,
});

export const newUser = mongoose.model("newUser", newUserDetails, "newUser");
