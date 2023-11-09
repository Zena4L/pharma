import { Router } from "express";
import { loggedIn } from "../../middlewares/loggedIn";
import { checkout } from "../../controllers/carts/checkout";

const router = Router();

router.post("/api/v1/checkout", loggedIn, checkout);

export { router as checkout };
