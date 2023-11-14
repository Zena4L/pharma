import { RequestHandler } from "express";
import Product from "../../models/product";
import { APIFeatures } from "../../utils/APIFeatures";

export const getAllProduct: RequestHandler = async (req, res, next) => {
  try {
    // const products = await Product.find();
    const features = new APIFeatures(Product.find(), req.query).filter().pagination().limitedField().sort()
    const products = await features.query;

    res.status(200).json({
      length: products.length,
      products
    });
  } catch (err) {
    console.log(err);
  }
};
