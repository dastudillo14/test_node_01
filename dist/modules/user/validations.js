"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUserValidation = void 0;
const express_validation_1 = require("express-validation");
exports.newUserValidation = {
    body: express_validation_1.Joi.object({
        mail: express_validation_1.Joi.string()
            .email()
            .required(),
        name: express_validation_1.Joi.string().required(),
        age: express_validation_1.Joi.number().required(),
    }),
};
