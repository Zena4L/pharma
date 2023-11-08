"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkout = void 0;
const orders_1 = __importDefault(require("../../models/orders"));
const cart_1 = __importDefault(require("../../models/cart"));
const checkout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.id;
        const userCart = yield cart_1.default.findOne({ userId }).populate("products.productId");
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
        yield order.save();
        userCart.products = [];
        yield userCart.save();
        res.status(200).send(order);
    }
    catch (error) {
        console.error(error);
        throw new Error();
    }
});
exports.checkout = checkout;
//# sourceMappingURL=checkout.js.map