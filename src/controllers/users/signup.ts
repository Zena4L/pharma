import { RequestHandler } from "express";
import User from "../../models/user";
import Cart from "../../models/cart";
import { BadRequestError } from "../../errors/badRequestError";
import jwt from "jsonwebtoken";

export const signup: RequestHandler = async (req, res, next) => {
  const { email, password, name, address } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(new BadRequestError("This Email already exists"));
  }

  const user = User.build({ email, password, name, address });
  await user.save();

  // const cart =  Cart.build({ userId: user.id, products: [] });
  // await cart.save();

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
