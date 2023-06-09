import { Request, Response } from "express";
import { cartService } from "../services/cart.service";

class CartPage {
  public async addCart(req: Request, res: Response) {
    try {
      const cartAdd = await cartService.cartAdd(req.body);
      res.send(cartAdd);
    } catch (err) {
      res.send(err);
    }
  }

  public async viewCart(req: Request, res: Response) {
    const viewCart = await cartService.viewCart();
    res.send(viewCart);
  }

  public async clearCart(req: Request, res: Response) {
    const id = req.params._id;
    const buyProducts = await cartService.buyProducts(id);
    res.send(buyProducts);    
  }

  // public async deleteCart(req: Request, res: Response) {
  //   const id = req.params._id;
  //   const deleteCart = await cartService.deleteCart(id);
  //   res.send(deleteCart);
  //   console.log("delete Cart");
    
  // }
}

export const cartController = new CartPage();
