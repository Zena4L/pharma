"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = require("http");
dotenv_1.default.config({
    path: 'config.env'
});
const start = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        console.log(" Database Connected");
    }
    catch (err) {
        console.log(err);
    }
    const server = (0, http_1.createServer)(app_1.default);
    server.listen(3000, () => {
        console.log("server is live on port 3000");
    });
};
start();
//# sourceMappingURL=server.js.map