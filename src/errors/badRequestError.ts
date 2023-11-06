import { CustomError } from "./customError";

export class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(public messgae: string) {
    super();
    this.message = messgae;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  output() {
    return [{ message: `${this.message}` }];
  }
}
