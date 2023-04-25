import { Router } from "express";
import productController from "../controllers/product-controller";

const routes = Router();

routes.post("/product", productController.store);

export default routes;
