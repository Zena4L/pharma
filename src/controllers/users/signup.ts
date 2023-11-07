import { RequestHandler } from "express";
import User from "../../models/user";
import Cart from "../../models/cart";
import { BadRequestError } from "../../errors/badRequestError";
import jwt from "jsonwebtoken";

export const signup: RequestHandler = async (req, res, next) => {
  const { email, password, profile } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(new BadRequestError("This Email already exists"));
  }

  const user = User.build({ email, password, profile });
  await user.save();

  // Create an empty cart for the new user and associate it with the user
  const cart = new Cart({ user: user._id, items: [] });
  await cart.save();

  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );

  req.session = {
    jwt: userJwt,
  };

  res.status(201).send(user);
};
