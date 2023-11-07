import { Router } from "express";
import { loggedIn } from "../../middlewares/loggedIn";
import { addToCart } from "../../controllers/carts/addCart";

const router = Router({ mergeParams: true });

router.post('/cart', loggedIn, addToCart);

export { router as addCart };
