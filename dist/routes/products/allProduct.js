"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allProduct = void 0;
const express_1 = require("express");
const allProduct_1 = require("../../controllers/products/allProduct");
const router = (0, express_1.Router)();
exports.allProduct = router;
router.get("/api/v1/product", allProduct_1.getAllProduct);
//# sourceMappingURL=allProduct.js.map