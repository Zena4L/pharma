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
exports.signup = void 0;
const user_1 = __importDefault(require("../../models/user"));
const cart_1 = __importDefault(require("../../models/cart"));
const badRequestError_1 = require("../../errors/badRequestError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, profile } = req.body;
    const existingUser = yield user_1.default.findOne({ email });
    if (existingUser) {
        return next(new badRequestError_1.BadRequestError("This Email already exists"));
    }
    const user = user_1.default.build({ email, password, profile });
    yield user.save();
    const cart = new cart_1.default({ user: user._id, items: [] });
    yield cart.save();
    const userJwt = jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
    }, process.env.JWT_KEY);
    req.session = {
        jwt: userJwt,
    };
    res.status(201).send(user);
});
exports.signup = signup;
//# sourceMappingURL=signup.js.map