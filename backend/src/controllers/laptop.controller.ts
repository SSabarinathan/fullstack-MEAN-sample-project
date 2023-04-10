import { Request, Response } from "express";
import { laptopDetailService } from "../services/laptop.service";


class LaptopDetailsController {
  public async laptopViewFE(req: Request, res: Response) {
    const laptopView = await laptopDetailService.laptopView();
    res.send(laptopView);
  }
}

export const laptopDetailsController = new LaptopDetailsController();
