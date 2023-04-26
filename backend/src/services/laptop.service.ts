
import { laptopDetail } from "../models/laptop.models";

class Laptop {
  async laptopView() {
    const laptopDetails = await laptopDetail.find({});
    return laptopDetails;
  }
}

export const laptopDetailService = new Laptop();

