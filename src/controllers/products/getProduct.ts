import { RequestHandler } from "express";
import Product from "../../models/product";
import { BadRequestError } from "../../errors/badRequestError";

export const getProduct: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    return next(new BadRequestError("This product can not be found"));
  }

  res.status(200).send(product);
};
