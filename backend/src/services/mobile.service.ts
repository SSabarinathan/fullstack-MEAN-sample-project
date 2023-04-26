import { mobileDetail } from "../models/mobile.models";

class Mobile {
  async mobileView() {
    const mobileDetails = await mobileDetail.find({});
    return mobileDetails;
  }
}

export const mobileDetailService = new Mobile();



























export const viewMobile = new Mobile();
