"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const customError_1 = require("./customError");
class BadRequestError extends customError_1.CustomError {
    constructor(messgae) {
        super();
        this.messgae = messgae;
        this.statusCode = 400;
        this.message = messgae;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    output() {
        return [{ message: `${this.message}` }];
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=badRequestError.js.map