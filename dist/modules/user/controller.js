"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveUser = void 0;
const schema_1 = require("./schema");
const saveUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new schema_1.UserModel(Object.assign({}, req.body));
        yield newUser.save();
        return res.send(newUser);
    }
    catch (error) {
        console.log('error-> ', error);
        res.statusCode = 500;
        return res.send({ "msg": "Error on saved user." });
    }
});
exports.saveUser = saveUser;
