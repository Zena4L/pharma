"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
let mongo;
beforeAll(async () => {
    process.env.JWT_KEY = "whatever";
    mongo = await mongodb_memory_server_1.MongoMemoryServer.create();
    const mongouri = mongo.getUri();
    await mongoose_1.default.connect(mongouri);
});
beforeEach(async () => {
    const collections = await mongoose_1.default.connection.db.collections();
    for (let collection of collections) {
        await collection.deleteMany();
    }
});
afterAll(async () => {
    await mongo.stop();
    await mongoose_1.default.connection.close();
});
global.sigin = async () => {
    const email = "test@test.com";
    const password = "password";
    const profile = {
        name: "test",
        address: "123 str",
    };
    const response = await (0, supertest_1.default)(app_1.default)
        .post("/api/users/signin")
        .send({
        email,
        password,
        profile,
    })
        .expect(200);
    const cookie = response.get("Set-Cookie");
    return cookie;
};
//# sourceMappingURL=setup.js.map