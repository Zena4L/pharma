import { Router } from "express";
import { deleteProduct } from "../../controllers/products/deleteProduct";
const router = Router();

router.delete("/api/v1/product/:id", deleteProduct);

export { router as deleteProduct };
