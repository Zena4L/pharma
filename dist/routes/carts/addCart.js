"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCart = void 0;
const express_1 = require("express");
const loggedIn_1 = require("../../middlewares/loggedIn");
const addCart_1 = require("../../controllers/carts/addCart");
const router = (0, express_1.Router)();
exports.addCart = router;
router.post("/api/v1/cart/add", loggedIn_1.loggedIn, addCart_1.addToCart);
//# sourceMappingURL=addCart.js.map