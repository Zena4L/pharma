import { Router } from "express";
import { getProduct } from "../../controllers/products/getProduct";
const router = Router();

router.get("/api/v1/product/:id", getProduct);

export { router as getProduct };
