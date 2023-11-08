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
exports.signin = void 0;
const user_1 = __importDefault(require("../../models/user"));
const badRequestError_1 = require("../../errors/badRequestError");
const password_1 = require("../../utils/password");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const existingUser = yield user_1.default.findOne({ email });
    if (!existingUser) {
        return next(new badRequestError_1.BadRequestError("Invalid email or password"));
    }
    const correctPassword = yield password_1.Password.compare(existingUser.password, password);
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
});
exports.signin = signin;
//# sourceMappingURL=signin.js.map