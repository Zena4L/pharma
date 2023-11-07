import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

interface Payload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: Payload;
    }
  }
}

export const loggedIn: RequestHandler = (req, res, next) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session?.jwt,
      process.env.JWT_KEY!
    ) as Payload;

    req.currentUser = payload;
  } catch (err) {
    console.log(err);
  }
  next();
};
