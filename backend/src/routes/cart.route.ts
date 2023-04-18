import express from "express";
import { cartController } from "../controllers/cart.controller";

export const cartRouter = express.Router();

cartRouter.post("/", cartController.addCart);
cartRouter.get("/", cartController.viewCart);
cartRouter.delete("/:id", cartController.buyProductsInCart);
cartRouter.delete("/:id", cartController.deleteCart);
// cartRouter.put("/:id",cartController.updatePrice )
