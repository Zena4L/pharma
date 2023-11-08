import { Router } from "express";
import { loggedIn } from "../../middlewares/loggedIn";
import { addToCart } from "../../controllers/carts/addCart";
import { notAuthorized } from "../../middlewares/NotAuthorized";

const router = Router();

router.post("/api/v1/cart/add", loggedIn, notAuthorized, addToCart);

export { router as addCart };
