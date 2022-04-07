"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtMiddleware = void 0;
const jwtMiddleware = (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (token) {
            next();
        }
        return res.status(401).json({ 'msg': 'No token' });
    }
    catch (error) {
        return res.status(500).json({ 'msg': 'Error X' });
    }
};
exports.jwtMiddleware = jwtMiddleware;
