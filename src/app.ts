import { json } from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import { validate, ValidationError } from "express-validation";
import mongoose from "mongoose";
import { wrapValidationHelper } from "./helpers/wrapValidation";
import { jwtMiddleware } from "./middlewares/jwt";
import { saveUser } from "./modules/user/controller";
import { newUserValidation } from "./modules/user/validations";

const app = express();

mongoose.connect('mongodb://citizix:S3cret@localhost', () => {
    console.log('connected to mongo');
});

app.use(json());

//Routes for user
app.post("/user", [validate(newUserValidation),jwtMiddleware], saveUser);

app.listen(8080, () => {
    console.log('listen on 8080');
})

app.use(wrapValidationHelper)

