import { Request, Response } from "express";
import { loginService } from "../services/login.service";
import { signAccessToken } from "../services/jwt.service";
import { text } from "body-parser";

class Login {
  public async login(req: Request, res: Response) {
    const login = await loginService.login(req);
    
    const jwt= await signAccessToken.signAccessTokens(req.body.text);
    console.log(jwt);
    
    res.send(login);
  }
}

export const loginController = new Login();
