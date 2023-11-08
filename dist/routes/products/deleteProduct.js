"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const express_1 = require("express");
const deleteProduct_1 = require("../../controllers/products/deleteProduct");
const router = (0, express_1.Router)();
exports.deleteProduct = router;
router.delete("/api/v1/product/:id", deleteProduct_1.deleteProduct);
//# sourceMappingURL=deleteProduct.js.map