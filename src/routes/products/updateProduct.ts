import { Router } from "express";
import { body } from "express-validator";
import { requestValidation } from "../../middlewares/requestValidator";
import { updateProduct } from "../../controllers/products/updateProduct";
const router = Router();

router.patch(
  "/api/v1/product/:id",
  [
    body("name").notEmpty().trim().withMessage("Must have a name"),
    body("description")
      .notEmpty()
      .trim()
      .withMessage("Must have a description"),
    body("price").isNumeric().withMessage("Must have a price"),
    body("stockQuantity").isNumeric().withMessage("Must have a stockQuantity"),
    body("category").notEmpty().trim().withMessage("Must have a category"),
    body("image").notEmpty().trim().withMessage("Must have an image"),
  ],
  requestValidation,
  updateProduct
);

export { router as updateProduct };
