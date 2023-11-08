"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const product_1 = __importDefault(require("../../models/product"));
const deleteProduct = async (req, res, next) => {
    await product_1.default.findByIdAndDelete(req.params.id);
    res.status(200).send(null);
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=deleteProduct.js.map