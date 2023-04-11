import { Request, Response } from "express";
import { loginService } from "../services/login.service";

class LoginController{
    public async login(req: Request, res: Response){
        const login= await loginService.login(req.body);
        console.log(login);
        
        res.send(login)
    }
}

export const loginController= new LoginController()