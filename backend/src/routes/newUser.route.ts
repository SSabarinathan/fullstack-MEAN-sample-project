import express from "express";
import { newUserController } from "../controllers/newUser.controller";

export const newUserRouter = express.Router();

newUserRouter.post("/", newUserController.newUser);
