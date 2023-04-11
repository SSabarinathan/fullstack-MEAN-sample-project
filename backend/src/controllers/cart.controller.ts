import { Request, Response } from "express";
import { cartService } from "../services/cart.service";

class CartController {
  public async cartViewFE(req: Request, res: Response) {
    const cartView = await cartService.cartView();
    res.send(cartView);
  }

  public async cartAddFE(req: Request, res:Response){
    const cartAdd= await cartService.cartAdd(req.body);
    res.send(cartAdd)
  }
  
}

export const cartController = new CartController();
