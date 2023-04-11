import {loginDetails} from '../models/login.models'


class LoginService{
    async login(data:any){
        const loginUsers= await loginDetails.insertMany(data);
        return loginUsers;
    }   
}

export const loginService= new LoginService()