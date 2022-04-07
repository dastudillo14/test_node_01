"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapValidationHelper = void 0;
const express_validation_1 = require("express-validation");
const wrapValidationHelper = (err, req, res, next) => {
    var _a, _b;
    if (err instanceof express_validation_1.ValidationError) {
        console.log('asdasd');
        let messages = [];
        let finalMessage = '';
        if (err.details.body) {
            messages = (_a = err.details.body) === null || _a === void 0 ? void 0 : _a.map(e => e.message);
        }
        if (err.details.query) {
            messages = (_b = err.details.query) === null || _b === void 0 ? void 0 : _b.map(e => e.message);
        }
        messages === null || messages === void 0 ? void 0 : messages.forEach(element => {
            finalMessage += element;
        });
        return res.status(500).send({ 'msg': finalMessage });
    }
    return res.status(500).json(err);
};
exports.wrapValidationHelper = wrapValidationHelper;
