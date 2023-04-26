import { cartDetail } from "../models/cart.models";

class Cart{
  async cartAdd(data: any) {
    const cartAdd = await cartDetail.insertMany(data);
    return cartAdd;
  }

  async viewCart() {
    const cartDetails = await cartDetail.find({});
    return cartDetails;
  }

  async buyProducts(id: any) {
    const buyProducts = await cartDetail.deleteOne(id);
    return buyProducts;
  }

  async deleteCart(id: any) {
    const deleteCart = await cartDetail.deleteOne(id);
    return deleteCart;
  }
}

export const cartService = new Cart();
