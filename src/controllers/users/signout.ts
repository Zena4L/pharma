import { RequestHandler } from "express";

export const signout: RequestHandler = (req, res, next) => {
  req.session = null;
  res.status(200).send({});
};
