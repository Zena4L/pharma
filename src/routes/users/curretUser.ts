import { Router } from "express";
import { currentUser } from "../../controllers/users/currentUser";
import { loggedIn } from "../../middlewares/loggedIn";

const router = Router();

router.get("/api/v1/users/currentuser", loggedIn, currentUser);

export { router as currentuser };
