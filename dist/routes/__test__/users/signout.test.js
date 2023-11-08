"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it("return a status code of 200 on signout", async () => {
    await (0, supertest_1.default)(app_1.default)
        .post("/api/v1/users/signup")
        .send({
        email: "test@test.com",
        password: "password",
        profile: {
            name: "test",
            address: "123 st",
        },
    })
        .expect(201);
    await (0, supertest_1.default)(app_1.default).get("/api/v1/users/signout").expect(200);
});
//# sourceMappingURL=signout.test.js.map