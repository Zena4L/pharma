import { RequestHandler } from "express";
import User from "../../models/user";
import { BadRequestError } from "../../errors/badRequestError";
import { Password } from "../../utils/password";
import jwt from "jsonwebtoken";

export const signin: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email }).populate("cart");

  if (!existingUser) {
    return next(new BadRequestError("Invalid email or password"));
  }

  const correctPassword = await Password.compare(
    existingUser.password,
    password
  );
  if (!correctPassword) {
    return next(new BadRequestError("Invalid email or password"));
  }

  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_KEY!
  );

  req.session = {
    jwt: userJwt,
  };
  res.status(200).send(existingUser);
};
