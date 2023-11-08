"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const morgan_1 = __importDefault(require("morgan"));
const notFoundError_1 = require("./errors/notFoundError");
const globalError_1 = require("./middlewares/globalError");
const signup_1 = require("./routes/users/signup");
const signin_1 = require("./routes/users/signin");
const signout_1 = require("./routes/users/signout");
const curretUser_1 = require("./routes/users/curretUser");
const newProduct_1 = require("./routes/products/newProduct");
const allProduct_1 = require("./routes/products/allProduct");
const getProduct_1 = require("./routes/products/getProduct");
const updateProduct_1 = require("./routes/products/updateProduct");
const deleteProduct_1 = require("./routes/products/deleteProduct");
const addCart_1 = require("./routes/carts/addCart");
const checkout_1 = require("./routes/carts/checkout");
require("express-async-errors");
const app = (0, express_1.default)();
app.use((0, express_1.json)());
(0, morgan_1.default)("dev");
app.use((0, cookie_session_1.default)({
    signed: false,
    secure: false,
}));
app.use(signup_1.signup);
app.use(signin_1.signin);
app.use(signout_1.signout);
app.use(curretUser_1.currentuser);
app.use(newProduct_1.newProduct);
app.use(allProduct_1.allProduct);
app.use(getProduct_1.getProduct);
app.use(updateProduct_1.updateProduct);
app.use(deleteProduct_1.deleteProduct);
app.use(addCart_1.addCart);
app.use(checkout_1.checkout);
app.all("*", (req, res, next) => {
    return next(new notFoundError_1.NotFoundError(req));
});
app.use(globalError_1.globalError);
exports.default = app;
//# sourceMappingURL=app.js.map