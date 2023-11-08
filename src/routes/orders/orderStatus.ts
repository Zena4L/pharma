import { Router } from "express";
import { orderStatus } from "../../controllers/orders/orderStatus";
import { loggedIn } from "../../middlewares/loggedIn";
import { notAuthorized } from "../../middlewares/NotAuthorized";

const router = Router();

router.post("/api/v1/orders", loggedIn, notAuthorized, orderStatus);

export { router as orderStatus };
