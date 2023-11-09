import { Router } from "express";
import { loggedIn } from "../../middlewares/loggedIn";
import { checkout, upload } from "../../controllers/carts/checkout";

const router = Router();

router.post("/api/v1/checkout", loggedIn, upload, checkout);

export { router as checkout };
