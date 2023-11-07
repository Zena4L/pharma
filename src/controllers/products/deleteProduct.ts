import { RequestHandler } from "express";
import Product from "../../models/product";

export const deleteProduct: RequestHandler = async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).send(null);
};
