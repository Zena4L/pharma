"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
describe("Test for email and password validation", () => {
    it("return with 400 on invalid email", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signup")
            .send({
            email: "test",
        })
            .expect(400);
        return response;
    });
    it("return with 400 on invalid password", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signup")
            .send({
            email: "test@test.com",
            password: "",
        })
            .expect(400);
        return response;
    });
    it("return with 400 on invalid profile", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signup")
            .send({
            email: "test@test.com",
            password: "test123",
            profile: "test",
        })
            .expect(400);
        return response;
    });
    it("return with a 201 status code for valid email and password and profile", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
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
        return response;
    });
    it("return with a 201 code when jwt is issued", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
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
        expect(response.get("Set-Cookie")).toBeDefined();
    });
    it("return with a 400 for duplicated email sign up", async () => {
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
            .expect(400);
    });
});
//# sourceMappingURL=signup.test.js.map