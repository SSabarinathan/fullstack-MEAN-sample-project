import cors from "cors";
import express, { json } from "express";
import mongoose from "mongoose";

import { newUserRouter } from "./routes/newUser.router";
import { mobileRouter } from "./routes/mobile.router";
import { laptopRouter } from "./routes/laptop.router";
import { loginRouter } from "./routes/login.router";
import { cartRouter } from "./routes/cart.router";

const app = express();
app.use(json());
app.use(cors());
// app.use(bodyParser.json());

//routing
app.use("/newUser", newUserRouter);
app.use("/mobile", mobileRouter);
app.use("/laptop", laptopRouter);
app.use("/userDetails",loginRouter );
app.use("/cart", cartRouter)

const port = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/eShoppingApp").then(() => {
  console.log("Connected DB!!.. Good job");
  app.listen(port, () => {
    console.log("Running on the port ", { port });
  });
});




//git comments to save
//git add .
//git commit -m""
//git push -u origin main
