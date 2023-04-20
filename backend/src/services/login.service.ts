import {loginDetails} from '../models/login.models';

class LoginService{
    
    async login(data:any){
        const loginUsers= await loginDetails.find({"text":data.body.text});  
              
        return loginUsers;
    }   


    

}

export const loginService= new LoginService()