"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = void 0;
const cart_1 = __importDefault(require("../../models/cart"));
const product_1 = __importDefault(require("../../models/product"));
const addToCart = async (req, res, next) => {
    var _a;
    try {
        if (!req.body.userId)
            req.body.userId = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.id;
        const userId = req.body.userId;
        const { productId, quantity } = req.body;
        const cart = await cart_1.default.findOne({ userId });
        if (!cart) {
            const newCart = cart_1.default.build({ userId, products: [] });
            await newCart.save();
        }
        const product = await product_1.default.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        const cartProduct = {
            productId: product._id,
            quantity,
            name: product.name,
            price: product.price,
        };
        cart === null || cart === void 0 ? void 0 : cart.products.push(cartProduct);
        await (cart === null || cart === void 0 ? void 0 : cart.save());
        res.status(201).json({ message: "Item added to cart successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.addToCart = addToCart;
//# sourceMappingURL=addCart.js.map