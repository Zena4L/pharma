"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
describe("for testing the signin", () => {
    it("return a 400 if email is incorrect", async () => {
        await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signup")
            .send({
            email: "test@test.com",
            password: "password",
            profile: {
                name: "test",
                address: "123 str",
            },
        })
            .expect(201);
        await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signin")
            .send({
            email: "test",
            password: "password",
        })
            .expect(400);
    });
    it("return a 400 if not password is incorrect", async () => {
        await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signup")
            .send({
            email: "test@test.com",
            password: "password",
            profile: {
                name: "test",
                address: "123 str",
            },
        })
            .expect(201);
        await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signin")
            .send({
            email: "test@test.com",
            password: "pass",
        })
            .expect(400);
    });
    it("return a 200 if email and password is valid", async () => {
        await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signup")
            .send({
            email: "test@test.com",
            password: "password",
            profile: {
                name: "test",
                address: "123 str",
            },
        })
            .expect(201);
        await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signin")
            .send({
            email: "test@test.com",
            password: "password",
        })
            .expect(200);
    });
    it("return a valid token", async () => {
        await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signup")
            .send({
            email: "test@test.com",
            password: "password",
            profile: {
                name: "test",
                address: "123 str",
            },
        })
            .expect(201);
        const response = await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signin")
            .send({
            email: "test@test.com",
            password: "password",
        })
            .expect(200);
        expect(response.get("Set-Cookie")).toBeDefined();
    });
});
//# sourceMappingURL=signin.test.js.map