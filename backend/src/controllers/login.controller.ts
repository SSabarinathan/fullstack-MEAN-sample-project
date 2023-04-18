import { Request, Response } from "express";
import { loginService } from "../services/login.service";

class Login{
    public async login(req: Request, res: Response){
        const login= await loginService.login(req.body);
        // console.log(login);
        
        res.send(login)
    }
}

export const loginController= new Login()