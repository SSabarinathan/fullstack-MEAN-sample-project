import express from "express";
import { cartController } from "../controllers/cart.controller";
import { verifiedToken } from "../services/jwt.service";

export const cartRouter = express.Router();

cartRouter.post("/",verifiedToken.verifyToken, cartController.addCart);
cartRouter.get("/",verifiedToken.verifyToken, cartController.viewCart);
cartRouter.delete("/:id", cartController.buyProductsInCart);
cartRouter.delete("/:id", cartController.deleteCart);
