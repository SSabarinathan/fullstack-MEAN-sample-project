import { newUser } from "../models/register.model";

class NewUser {
  async newUsers(data: any) {
    const newUsers = await newUser.insertMany(data);
    return newUsers;
  }
}

export const newUserService = new NewUser();
