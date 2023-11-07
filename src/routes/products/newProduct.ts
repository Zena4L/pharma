import { Router } from "express";
import { createProduct } from "../../controllers/products/newProduct";
import { body } from "express-validator";
import { requestValidation } from "../../middlewares/requestValidator";

const router = Router();

router.post(
  "/api/v1/product/new",
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
  createProduct
);

export { router as newProduct };
