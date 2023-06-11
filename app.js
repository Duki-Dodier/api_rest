import dotenv from "dotenv";
import express from "express";
import homeRoutes from "./src/routes/homeRoutes";
import "./src/db";

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
  }
}

export default new App().app;
