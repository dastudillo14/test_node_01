"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const express_validation_1 = require("express-validation");
const mongoose_1 = __importDefault(require("mongoose"));
const wrapValidation_1 = require("./helpers/wrapValidation");
const jwt_1 = require("./middlewares/jwt");
const controller_1 = require("./modules/user/controller");
const validations_1 = require("./modules/user/validations");
const app = (0, express_1.default)();
mongoose_1.default.connect('mongodb://citizix:S3cret@localhost', () => {
    console.log('connected to mongo');
});
app.use((0, body_parser_1.json)());
//Routes for user
app.post("/user", [(0, express_validation_1.validate)(validations_1.newUserValidation), jwt_1.jwtMiddleware], controller_1.saveUser);
app.listen(8080, () => {
    console.log('listen on 8080');
});
app.use(wrapValidation_1.wrapValidationHelper);
