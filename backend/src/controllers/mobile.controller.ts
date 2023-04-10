import { Request, Response } from "express";
import { mobileDetailService } from "../services/mobile.service";

class MobileDetailsController {
  public async mobileViewFE(req: Request, res: Response) {
    const mobileView = await mobileDetailService.mobileView();
    res.send(mobileView);
  }
}

export const mobileDetailsController = new MobileDetailsController();
