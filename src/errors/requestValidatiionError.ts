import { CustomError } from "./customError";
import { ValidationError } from "express-validator";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public error: ValidationError[]) {
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  output() {
    return this.error.map((err) => {
      return { message: err.msg };
    });
  }
}
