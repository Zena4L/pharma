"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = void 0;
const product_1 = __importDefault(require("../../models/product"));
const updateProduct = async (req, res, next) => {
    const { name, description, price, stockQuantity, category, image } = req.body;
    try {
        const updateProduct = await product_1.default.findById(req.params.id, {
            name,
            description,
            price,
            stockQuantity,
            category,
            image,
        }, { new: true });
        res.status(200).send(updateProduct);
    }
    catch (err) {
        console.log(err);
    }
};
exports.updateProduct = updateProduct;
//# sourceMappingURL=updateProduct.js.map