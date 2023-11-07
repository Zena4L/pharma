import { RequestHandler } from "express";
import Product from "../../models/product";

export const getAllProduct: RequestHandler = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).send(products);
};
