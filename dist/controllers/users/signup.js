"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const user_1 = __importDefault(require("../../models/user"));
const cart_1 = __importDefault(require("../../models/cart"));
const badRequestError_1 = require("../../errors/badRequestError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup = async (req, res, next) => {
    const { email, password, profile } = req.body;
    const existingUser = await user_1.default.findOne({ email });
    if (existingUser) {
        return next(new badRequestError_1.BadRequestError("This Email already exists"));
    }
    const user = user_1.default.build({ email, password, profile });
    await user.save();
    const cart = new cart_1.default({ user: user._id, items: [] });
    await cart.save();
    const userJwt = jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
    }, process.env.JWT_KEY);
    req.session = {
        jwt: userJwt,
    };
    res.status(201).send(user);
};
exports.signup = signup;
//# sourceMappingURL=signup.js.map