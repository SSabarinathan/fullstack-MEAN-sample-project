import express from "express";
import { newUserController } from "../controllers/register.controller";

export const newUserRouter = express.Router();

newUserRouter.post("/", newUserController.newUser);
