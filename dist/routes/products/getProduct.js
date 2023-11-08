"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = void 0;
const express_1 = require("express");
const getProduct_1 = require("../../controllers/products/getProduct");
const router = (0, express_1.Router)();
exports.getProduct = router;
router.get("/api/v1/product/:id", getProduct_1.getProduct);
//# sourceMappingURL=getProduct.js.map