"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentuser = void 0;
const express_1 = require("express");
const currentUser_1 = require("../../controllers/users/currentUser");
const loggedIn_1 = require("../../middlewares/loggedIn");
const router = (0, express_1.Router)();
exports.currentuser = router;
router.get("/api/v1/users/currentuser", loggedIn_1.loggedIn, currentUser_1.currentUser);
//# sourceMappingURL=curretUser.js.map