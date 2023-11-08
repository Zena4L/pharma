"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../../app"));
const supertest_1 = __importDefault(require("supertest"));
it("return with a status of 200 on sucess", async () => {
    await (0, supertest_1.default)(app_1.default).get("/api/v1/product").send({}).expect(200);
});
//# sourceMappingURL=allProduct.test.js.map