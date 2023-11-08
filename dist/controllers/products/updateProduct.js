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
exports.updateProduct = void 0;
const product_1 = __importDefault(require("../../models/product"));
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, stockQuantity, category, image } = req.body;
    try {
        const updateProduct = yield product_1.default.findById(req.params.id, {
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
});
exports.updateProduct = updateProduct;
//# sourceMappingURL=updateProduct.js.map