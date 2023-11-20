import { Router } from "express";
import { myOrder } from "../../controllers/orders/myOrder";
import { loggedIn } from "../../middlewares/loggedIn";

const router = Router();

//test route

router.get("/api/v1/myorders", loggedIn, myOrder);

export { router as myOrder };
