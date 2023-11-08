"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkout = void 0;
const orders_1 = __importDefault(require("../../models/orders"));
const cart_1 = __importDefault(require("../../models/cart"));
const checkout = async (req, res, next) => {
    var _a;
    try {
        const userId = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.id;
        const userCart = await cart_1.default.findOne({ userId }).populate("products.productId");
        if (!userCart) {
            return res.status(400).json({ error: "User cart not found" });
        }
        const total = userCart.products.reduce((acc, product) => {
            return acc + product.quantity * product.price;
        }, 0);
        const { status } = req.body;
        const order = new orders_1.default({
            user: userId,
            orderDate: new Date(),
            status,
            orderItems: userCart.products,
            total,
        });
        await order.save();
        userCart.products = [];
        await userCart.save();
        res.status(200).send(order);
    }
    catch (error) {
        console.error(error);
        throw new Error();
    }
};
exports.checkout = checkout;
//# sourceMappingURL=checkout.js.map