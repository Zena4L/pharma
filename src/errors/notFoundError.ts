import { CustomError } from "./customError";
import { Request } from "express";

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(public req: Request) {
    super();
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  output(): { message: string }[] {
    return [{ message: `${this.req.originalUrl} is not defined` }];
  }
}
