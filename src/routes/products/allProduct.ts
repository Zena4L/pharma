import { Router } from "express";
import { getAllProduct } from "../../controllers/products/allProduct";

const router = Router();

router.get("/api/v1/product/all", getAllProduct);

export { router as allProduct };
