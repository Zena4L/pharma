"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signout = void 0;
const express_1 = require("express");
const signout_1 = require("../../controllers/users/signout");
const router = (0, express_1.Router)();
exports.signout = router;
router.get("/api/v1/users/signout", signout_1.signout);
//# sourceMappingURL=signout.js.map