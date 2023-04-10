import { Request, Response } from "express";
import { newUserService } from "../services/newUser.service";

class NewUserController{
    public async newUser(req: Request, res: Response){
        const newUser= await newUserService.newUsers(req.body);
        console.log(newUser);
        
        res.send(newUser)
    }
}

export const newUserController= new NewUserController()