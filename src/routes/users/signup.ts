import { Router } from "express";
import { body } from "express-validator";
import { signup } from "../../controllers/users/signup";
import { requestValidation } from "../../middlewares/requestValidator";
const router = Router();

router.post(
  "/api/v1/users/signup",
  [
    body("email").trim().isEmail().withMessage("Provide a valid email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 8 })
      .withMessage("password must be a min of 4 and a max of 8"),
    body("profile")
      .isObject()
      .withMessage("profile must have a name and address"),
  ],
  requestValidation,
  signup
);

export { router as signup };
