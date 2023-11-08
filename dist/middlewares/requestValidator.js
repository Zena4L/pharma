"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidation = void 0;
const requestValidatiionError_1 = require("../errors/requestValidatiionError");
const express_validator_1 = require("express-validator");
const requestValidation = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return next(new requestValidatiionError_1.RequestValidationError(errors.array()));
    }
    next();
};
exports.requestValidation = requestValidation;
//# sourceMappingURL=requestValidator.js.map