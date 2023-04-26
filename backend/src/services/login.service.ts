import { newUser } from "../models/register.model";

class LoginPage {
  async loginCheck(data: any) {
    try {
      const text = data.text;
      const password = data.password;
      const validUser = await newUser.findOne({ text });
      const validEmail = await newUser.findOne({ password });
      if (validUser && validEmail) {
        return validEmail;
      } else {
        return "User not found!";
      }
    } catch (err) {
      return err;
    }
  }
}
export const loginService = new LoginPage();
