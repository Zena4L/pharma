"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProduct = void 0;
const product_1 = __importDefault(require("../../models/product"));
const getAllProduct = async (req, res, next) => {
    try {
        const products = await product_1.default.find();
        res.status(200).send(products);
    }
    catch (err) {
        console.log(err);
    }
};
exports.getAllProduct = getAllProduct;
//# sourceMappingURL=allProduct.js.map