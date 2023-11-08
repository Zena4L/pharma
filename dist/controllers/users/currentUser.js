"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const currentUser = (req, res, next) => {
    res.status(200).send({ currentUser: req.currentUser || null });
};
exports.currentUser = currentUser;
//# sourceMappingURL=currentUser.js.map