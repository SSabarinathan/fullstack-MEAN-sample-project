import { Request, Response } from "express";
import { laptopDetailService } from "../services/laptop.service";

class LaptopDetails {
  public async viewLaptop(req: Request, res: Response) {
    const laptopView = await laptopDetailService.laptopView();
    res.send(laptopView);
  }
}

export const laptopDetailsController = new LaptopDetails();
