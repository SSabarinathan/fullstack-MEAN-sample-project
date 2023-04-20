import cookieParser from "cookie-parser";
import express from "express";

import { Request, Response } from "express";
import { loginService } from "../services/login.service";
import { JWT } from "../services/jwt.service";

const app = express();
app.use(cookieParser());

class Login {
  public async login(req: Request, res: Response) {
    const login = await loginService.login(req);

    const jwt = await JWT.generateToken(req.body.text);
    console.log(jwt);
    res.send({ token: jwt });
  }
}

export const loginController = new Login();
