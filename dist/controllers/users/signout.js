"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signout = void 0;
const signout = (req, res, next) => {
    req.session = null;
    res.status(200).send({});
};
exports.signout = signout;
//# sourceMappingURL=signout.js.map