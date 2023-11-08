"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalError = void 0;
const customError_1 = require("../errors/customError");
const globalError = (err, req, res, next) => {
    if (err instanceof customError_1.CustomError) {
        return res.status(err.statusCode).send(err.output());
    }
    res.status(500).send([{ message: "something went wrong, try again later" }]);
};
exports.globalError = globalError;
//# sourceMappingURL=globalError.js.map