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
describe("for testing the signin", () => {
    it("return a 400 if email is incorrect", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default)
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
        yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signin")
            .send({
            email: "test",
            password: "password",
        })
            .expect(400);
    }));
    it("return a 400 if not password is incorrect", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default)
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
        yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signin")
            .send({
            email: "test@test.com",
            password: "pass",
        })
            .expect(400);
    }));
    it("return a 200 if email and password is valid", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default)
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
        yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signin")
            .send({
            email: "test@test.com",
            password: "password",
        })
            .expect(200);
    }));
    it("return a valid token", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default)
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
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/users/signin")
            .send({
            email: "test@test.com",
            password: "password",
        })
            .expect(200);
        expect(response.get("Set-Cookie")).toBeDefined();
    }));
});
//# sourceMappingURL=signin.test.js.map