import { RequestHandler } from "express";
import { RequestValidationError } from "../errors/requestValidatiionError";
import { validationResult } from "express-validator";

export const requestValidation: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new RequestValidationError(errors.array()));
  }

  next();
};
