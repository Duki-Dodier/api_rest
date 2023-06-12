import { Router } from "express";
import  homeController from "../controllers/HomeController";
import userController from "../controllers/UserController";

const router = new Router();

router.get("/", homeController.index);

export default router;
