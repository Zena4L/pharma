"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkout = void 0;
const express_1 = require("express");
const loggedIn_1 = require("../../middlewares/loggedIn");
const checkout_1 = require("../../controllers/carts/checkout");
const router = (0, express_1.Router)();
exports.checkout = router;
router.post("/api/v1/checkout", loggedIn_1.loggedIn, checkout_1.checkout);
//# sourceMappingURL=checkout.js.map