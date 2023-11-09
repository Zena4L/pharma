import { RequestHandler } from "express";
import User from "../../models/user";
import { BadRequestError } from "../../errors/badRequestError";
import jwt from "jsonwebtoken";
import Cart from "../../models/cart";

export const signup: RequestHandler = async (req, res, next) => {
  const { email, password, name, address } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return next(new BadRequestError("This Email already exists"));
    }

    const user = User.build({
      email,
      password,
      name,
      address,
    });

    const cart = Cart.build({ userId: user.id, products: [] });
    await cart.save();

    await user.save();

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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
