import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/customError";
export const globalError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.output());
  }
  res.status(500).send([{ message: "something went wrong, try again later" }]);
};
