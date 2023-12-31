import { Router } from "express";
import { loggedIn } from "../../middlewares/loggedIn";
import { addToCart } from "../../controllers/carts/addCart";

const router = Router();

router.post("/api/v1/cart/add", loggedIn, addToCart);

export { router as addCart };
