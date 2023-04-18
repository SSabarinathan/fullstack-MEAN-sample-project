import { mobileDetail } from "../models/mobile.models";

class MobileService {
  async mobileView() {
    const mobileDetails = await mobileDetail.find({});
    return mobileDetails;
  }
}

export const mobileDetailService = new MobileService();

export const viewMobile = new MobileService();
