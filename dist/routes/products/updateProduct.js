"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const requestValidator_1 = require("../../middlewares/requestValidator");
const updateProduct_1 = require("../../controllers/products/updateProduct");
const router = (0, express_1.Router)();
exports.updateProduct = router;
router.patch("/api/v1/product/:id", [
    (0, express_validator_1.body)("name").notEmpty().trim().withMessage("Must have a name"),
    (0, express_validator_1.body)("description")
        .notEmpty()
        .trim()
        .withMessage("Must have a description"),
    (0, express_validator_1.body)("price").isNumeric().withMessage("Must have a price"),
    (0, express_validator_1.body)("stockQuantity").isNumeric().withMessage("Must have a stockQuantity"),
    (0, express_validator_1.body)("category").notEmpty().trim().withMessage("Must have a category"),
    (0, express_validator_1.body)("image").notEmpty().trim().withMessage("Must have an image"),
], requestValidator_1.requestValidation, updateProduct_1.updateProduct);
//# sourceMappingURL=updateProduct.js.map