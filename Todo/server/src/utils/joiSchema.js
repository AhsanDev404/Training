import Joi from "joi";

export const joiUserRegisterSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().regex(/^[a-zA-Z]+$/).min(4).max(50).required(),
  password: Joi.string().min(8).max(16).required(),
});

export const joiUserLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required(),
  });

