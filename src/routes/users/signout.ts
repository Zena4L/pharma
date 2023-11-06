import { Router } from "express";
import { signout } from "../../controllers/users/signout";

const router = Router();

router.get("/api/v1/users/signout", signout);

export { router as signout };
