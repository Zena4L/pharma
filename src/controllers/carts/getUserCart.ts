import { RequestHandler } from "express";
import User from "../../models/user";
import { BadRequestError } from "../../errors/badRequestError";
export const getUserCart: RequestHandler = async (req, res, next) => {
  res.status(200).send("ok");
};
