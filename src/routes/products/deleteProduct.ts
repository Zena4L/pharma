import { Router } from "express";
import { deleteProduct } from "../../controllers/products/deleteProduct";
import { notAuthorized } from "../../middlewares/NotAuthorized";
import { loggedIn } from "../../middlewares/loggedIn";
const router = Router();

router.delete("/api/v1/product/:id", loggedIn, notAuthorized, deleteProduct);

export { router as deleteProduct };
