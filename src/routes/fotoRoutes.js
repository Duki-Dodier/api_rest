import { Router } from "express";
import multer from "multer"
import  fotoController from "../controllers/FotoController";
import multerConfig from "../config/mutlerConfig";

const upload = multer(multerConfig)

const router = new Router();

router.post("/", fotoController.store);

export default router;
