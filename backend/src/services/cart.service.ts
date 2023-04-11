import { cartDetail } from "../models/cart.models";


class CartService {
  async cartAdd(data:any){
    const cartAdd=await cartDetail.insertMany({data});
    return cartAdd;
  }
  async cartView() {
    const cartDetails = await cartDetail.find({});
    return cartDetails;
  }

}

export const cartService = new CartService();
