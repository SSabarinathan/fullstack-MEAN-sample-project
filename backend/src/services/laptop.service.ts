
import { laptopDetail } from "../models/laptop.models";

class LaptopService {
  async laptopView() {
    const laptopDetails = await laptopDetail.find({});
    return laptopDetails;
  }
}

export const laptopDetailService = new LaptopService();

// export const viewLaptop = new LaptopService();
