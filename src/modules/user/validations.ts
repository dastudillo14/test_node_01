import { Joi } from "express-validation";

export const newUserValidation = {
    body: Joi.object({
      mail: Joi.string()
        .email()
        .required(),
      name:Joi.string().required(),
      age:Joi.number().required(),
    }),
  }