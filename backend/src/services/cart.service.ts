import { cartDetail } from "../models/cart.models";


class CartService {
  //inserting data
  async cartAdd(data:any){
    const cartAdd=await cartDetail.insertMany(data);
    return cartAdd;
  }
 //to view the data
  async cartView() {
    const cartDetails = await cartDetail.find({});
    return cartDetails;
  }
  //to buy the data
  async cartBuy(id:any){
    
    const cartBuy= await cartDetail.deleteOne(id);    
    return cartBuy;
  }



}

export const cartService = new CartService();
