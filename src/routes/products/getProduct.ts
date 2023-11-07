import { Router } from "express";
import { getProduct } from "../../controllers/products/getProduct";
const router = Router();

import { addCart } from "../carts/addCart";

router.use('/api/v1/product/:id', addCart);
 
router.get("/api/v1/product/:id", getProduct);


export { router as getProduct };
