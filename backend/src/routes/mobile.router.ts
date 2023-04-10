import express from "express";

import { mobileDetailsController } from "../controllers/mobile.controller";

export const mobileRouter = express.Router();

mobileRouter.get("/", mobileDetailsController.mobileViewFE);
