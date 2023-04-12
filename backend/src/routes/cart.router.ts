import express from "express";
import { cartController } from "../controllers/cart.controller";

export const cartRouter = express.Router();


cartRouter.post("/", cartController.cartAddFE );
cartRouter.get("/", cartController.cartViewFE);
cartRouter.delete("/:id", cartController.cartBuyFE);
cartRouter.delete("/:id", cartController.cartDeleteFE);

