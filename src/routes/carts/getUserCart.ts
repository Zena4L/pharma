import { Router } from "express";
import { loggedIn } from "../../middlewares/loggedIn";
import { getUserCart } from "../../controllers/carts/getUserCart";

const router = Router();

router.get("/api/v1/users/:id", loggedIn, getUserCart);

export { router as userCart };
