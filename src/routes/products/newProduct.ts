import { Router } from "express";
import {
  createProduct,
  uploadDrug,
} from "../../controllers/products/newProduct";
import { body } from "express-validator";
import { requestValidation } from "../../middlewares/requestValidator";

const router = Router();

router.post(
  "/api/v1/product/new",
  // [
  //   body("name").notEmpty().trim().withMessage("Must have a name"),
  //   body("description")
  //     .notEmpty()
  //     .trim()
  //     .withMessage("Must have a description"),
  //   body("price").notEmpty().withMessage("Must have a price"),
  //   body("stockQuantity").notEmpty().withMessage("Must have a stockQuantity"),
  //   body("category").notEmpty().trim().withMessage("Must have a category"),
  //   body("image").notEmpty().trim().withMessage("Must have an image"),
  // ],
  // requestValidation,
  uploadDrug,
  createProduct
);

export { router as newProduct };
