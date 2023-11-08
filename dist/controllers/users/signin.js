"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = void 0;
const user_1 = __importDefault(require("../../models/user"));
const badRequestError_1 = require("../../errors/badRequestError");
const password_1 = require("../../utils/password");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signin = async (req, res, next) => {
    const { email, password } = req.body;
    const existingUser = await user_1.default.findOne({ email });
    if (!existingUser) {
        return next(new badRequestError_1.BadRequestError("Invalid email or password"));
    }
    const correctPassword = await password_1.Password.compare(existingUser.password, password);
    if (!correctPassword) {
        return next(new badRequestError_1.BadRequestError("Invalid email or password"));
    }
    const userJwt = jsonwebtoken_1.default.sign({
        id: existingUser.id,
        email: existingUser.email,
    }, process.env.JWT_KEY);
    req.session = {
        jwt: userJwt,
    };
    res.status(200).send(existingUser);
};
exports.signin = signin;
//# sourceMappingURL=signin.js.map