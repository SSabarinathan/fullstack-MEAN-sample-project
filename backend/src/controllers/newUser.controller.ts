import { Request, Response } from "express";
import { newUserService } from "../services/newUser.service";

class NewUser {
  public async newUser(req: Request, res: Response) {
    const newUser = await newUserService.newUsers(req.body);
    res.send(newUser);
  }
}

export const newUserController = new NewUser();
