import { newUser } from "../models/newUser.model";

class NewUserService {
  async newUsers(data: any) {
    const newUsers = await newUser.insertMany(data);
    return newUsers;
  }
}

export const newUserService = new NewUserService();
