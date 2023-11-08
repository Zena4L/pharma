"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = void 0;
const product_1 = __importDefault(require("../../models/product"));
const badRequestError_1 = require("../../errors/badRequestError");
const getProduct = async (req, res, next) => {
    const { id } = req.params;
    const product = await product_1.default.findById(id);
    if (!product) {
        return next(new badRequestError_1.BadRequestError("This product can not be found"));
    }
    res.status(200).send(product);
};
exports.getProduct = getProduct;
//# sourceMappingURL=getProduct.js.map