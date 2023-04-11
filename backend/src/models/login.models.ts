import mongoose, { Schema } from "mongoose";

const LoginDetails = new Schema({
  text: String,
  password: String,
});


export const loginDetails= mongoose.model('login', LoginDetails, 'login')