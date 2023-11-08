"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const customError_1 = require("./customError");
class NotFoundError extends customError_1.CustomError {
    constructor(req) {
        super();
        this.req = req;
        this.statusCode = 404;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    output() {
        return [{ message: `${this.req.originalUrl} is not defined` }];
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=notFoundError.js.map