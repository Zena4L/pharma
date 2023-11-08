"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const product_1 = __importDefault(require("../../models/product"));
const createProduct = async (req, res, next) => {
    const { name, description, price, stockQuantity, category, image } = req.body;
    try {
        const newProduct = await product_1.default.build({
            name,
            description,
            price,
            stockQuantity,
            category,
            image,
        });
        await newProduct.save();
        res.status(201).send(newProduct);
    }
    catch (err) {
        console.log(err);
    }
};
exports.createProduct = createProduct;
//# sourceMappingURL=newProduct.js.map