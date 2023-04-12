import { Request, Response } from "express";
import { cartService } from "../services/cart.service";

class CartController {

  public async cartAddFE(req: Request, res:Response){
    const cartAdd= await cartService.cartAdd(req.body);
    res.send(cartAdd)
  }

  public async cartViewFE(req: Request, res: Response) {
    const cartView = await cartService.cartView();
    res.send(cartView);
  }

  public async cartBuyFE(req:Request, res:Response){
    const id= req.params._id;
    const cartBuy= await cartService.cartBuy(id);    
    res.send(cartBuy);
  }
  
}

export const cartController = new CartController();
