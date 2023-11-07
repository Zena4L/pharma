import { RequestHandler } from "express";
import Product from "../../models/product";

export const getAllProduct: RequestHandler = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).send(products);
  } catch (err) {
    console.log(err);
  }
};
