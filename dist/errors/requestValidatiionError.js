"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const customError_1 = require("./customError");
class RequestValidationError extends customError_1.CustomError {
    constructor(error) {
        super();
        this.error = error;
        this.statusCode = 400;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    output() {
        return this.error.map((err) => {
            return { message: err.msg };
        });
    }
}
exports.RequestValidationError = RequestValidationError;
//# sourceMappingURL=requestValidatiionError.js.map