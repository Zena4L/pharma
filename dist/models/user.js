"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const password_1 = require("../utils/password");
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    profile: {
        name: String,
        address: String,
    },
    cart: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Cart",
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        },
    },
});
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const hashed = await password_1.Password.toHarsh(this.get("password"));
        this.set("password", hashed);
    }
    next();
});
userSchema.statics.build = (attrs) => {
    return new User(attrs);
};
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map