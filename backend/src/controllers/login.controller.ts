import cookieParser from "cookie-parser";
import express from "express";
import { loginService } from "../services/login.service";

import { Request, Response } from "express";
import { JWT } from "../services/jwt.service";

const app = express();
app.use(cookieParser());

class Login {
  public async login(req: Request, res: Response) {
    const login = await loginService.loginCheck(req.body);
    if (login == "User not found!") {
      return res.status(401).json({ message: "User Not Found" });
    } else {
      const jwt = await JWT.generateToken(req.body.text);
      console.log(jwt);
      res.send({ token: jwt });
    }
  }
}

export const loginController = new Login();
