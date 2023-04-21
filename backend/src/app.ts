import cors from "cors";
import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { unless } from "express-unless";

import { newUserRouter } from "./routes/newUser.route";
import { mobileRouter } from "./routes/mobile.route";
import { laptopRouter } from "./routes/laptop.route";
import { loginRouter } from "./routes/login.route";
import { cartRouter } from "./routes/cart.route";
import { verifyToken } from "./services/jwt.service";

const app = express();
app.use(json());
app.use(cors());
dotenv.config();
// app.use(unless);
//routing

app.use("/newUser", newUserRouter);
app.use("/mobile", mobileRouter);
app.use("/laptop", laptopRouter);
app.use("/login", loginRouter);
app.use("/cart", cartRouter);

// app.use(verifyToken);

const excludePath = ["/newUser", "/login","/cart"];

const auth: any = verifyToken;
auth.unless = unless;
app.use(
  auth.unless({
    path: excludePath,
  })
);

const port = process.env.PORT_NUMBER || 3000;
mongoose.connect("mongodb://127.0.0.1:27017/eShoppingApp").then(() => {
  console.log("Connected DB!!.. Good job");
  app.listen(port, () => {
    console.log("Running on the port ", { port });
  });
});

// .catch(err => {
//     console.error("Connection error", err);
//     process.exit();
//   });

//git comments to save
//git add .
//git commit -m""
//git push -u origin main
