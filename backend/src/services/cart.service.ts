import { cartDetail } from "../models/cart.models";

class CartService {
  //inserting data
  async cartAdd(data: any) {
    const cartAdd = await cartDetail.insertMany(data);
    return cartAdd;
  }
  //to view the data
  async viewCart() {
    const cartDetails = await cartDetail.find({});
    return cartDetails;
  }
  //to buy the data
  async buyProducts(id: any) {
    const buyProducts = await cartDetail.deleteOne(id);
    return buyProducts;
  }
  //to delete the data
  async deleteCart(id: any) {
    const deleteCart = await cartDetail.deleteOne(id);
    return deleteCart;
  }

  // //update cart price
  async updatePrice(id: any) {
    const updatePrice = await cartDetail.updateOne({ id }, { $inc: {} });
    return updatePrice;
  }
}

export const cartService = new CartService();