import { RequestHandler } from "express";

export const currentUser: RequestHandler = (req, res, next) => {
  res.status(200).send({ currentUser: req.currentUser || null });
};
