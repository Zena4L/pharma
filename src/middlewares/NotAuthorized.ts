import { RequestHandler } from "express";
import { RequireAuth } from "../errors/requireAuth";
import User from "../models/user";

export const notAuthorized: RequestHandler = async (req, res, next) => {
  if (!req.currentUser) {
    return next(new RequireAuth());
  }
  const userRole = await User.findById(req.currentUser.id);
  if (userRole?.role === "user") {
    return next(new RequireAuth());
  }

  next();
};
