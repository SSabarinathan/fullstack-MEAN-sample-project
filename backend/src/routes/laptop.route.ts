import express from "express";

import { laptopDetailsController } from "../controllers/laptop.controller";

export const laptopRouter = express.Router();

laptopRouter.get("/", laptopDetailsController.viewLaptop);
