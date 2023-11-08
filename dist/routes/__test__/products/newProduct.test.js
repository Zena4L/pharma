"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it("should not return with a 404", async () => {
    const response = await (0, supertest_1.default)(app_1.default).post("/api/v1/product/new").send({});
    expect(response.status).not.toEqual(404);
});
it("should return with a 201 on succes", async () => {
    const response = await (0, supertest_1.default)(app_1.default).post("/api/v1/product/new").send({
        name: "test drug",
        description: "for test",
        price: 1,
        stockQuantity: 1,
        category: "test",
        image: "test",
    });
    expect(response.status).toEqual(201);
});
//# sourceMappingURL=newProduct.test.js.map