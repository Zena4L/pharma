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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
describe("Test for email and password validation", () => {
    it("return with 400 on invalid email", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signup")
            .send({
            email: "test",
        })
            .expect(400);
        return response;
    }));
    it("return with 400 on invalid password", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signup")
            .send({
            email: "test@test.com",
            password: "",
        })
            .expect(400);
        return response;
    }));
    it("return with 400 on invalid profile", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signup")
            .send({
            email: "test@test.com",
            password: "test123",
            profile: "test",
        })
            .expect(400);
        return response;
    }));
    it("return with a 201 status code for valid email and password and profile", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
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
    }));
    it("return with a 201 code when jwt is issued", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
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
    }));
    it("return with a 400 for duplicated email sign up", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default)
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
        yield (0, supertest_1.default)(app_1.default)
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
    }));
});
//# sourceMappingURL=signup.test.js.map