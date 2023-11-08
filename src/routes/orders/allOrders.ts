import { Router } from "express";
import { allOrders } from "../../controllers/orders/allOrders";
import { loggedIn } from "../../middlewares/loggedIn";
import { notAuthorized } from "../../middlewares/NotAuthorized";

const router = Router();

router.get("/api/v1/orders", loggedIn, notAuthorized, allOrders);

export { router as allOrders };
