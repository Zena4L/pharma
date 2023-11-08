"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const requestValidator_1 = require("../../middlewares/requestValidator");
const signin_1 = require("../../controllers/users/signin");
const router = (0, express_1.Router)();
exports.signin = router;
router.post("/api/v1/users/signin", (0, express_validator_1.body)("email").trim().isEmail().withMessage("Provide a valid email"), (0, express_validator_1.body)("password").trim().notEmpty().withMessage("Provide Password"), requestValidator_1.requestValidation, signin_1.signin);
//# sourceMappingURL=signin.js.map