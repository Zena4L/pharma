"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const signup_1 = require("../../controllers/users/signup");
const requestValidator_1 = require("../../middlewares/requestValidator");
const router = (0, express_1.Router)();
exports.signup = router;
router.post("/api/v1/users/signup", [
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Provide a valid email"),
    (0, express_validator_1.body)("password")
        .trim()
        .isLength({ min: 4, max: 8 })
        .withMessage("password must be a min of 4 and a max of 8"),
    (0, express_validator_1.body)("profile")
        .isObject()
        .withMessage("profile must have a name and address"),
], requestValidator_1.requestValidation, signup_1.signup);
//# sourceMappingURL=signup.js.map