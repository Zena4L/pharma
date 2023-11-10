import { Router } from "express";
import { loggedIn } from "../../middlewares/loggedIn";
import { myOrder } from "../../controllers/orders/myOrder";

const router = Router();

router.get("/api/v1/myorders", loggedIn, myOrder);

export { router as myOrder };
