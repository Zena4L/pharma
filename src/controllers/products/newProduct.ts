import { RequestHandler } from "express";
import Product from "../../models/product";

export const createProduct: RequestHandler = async (req, res, next) => {
  const { name, description, price, stockQuantity, category, image } = req.body;

  const newProduct = await Product.build({
    name,
    description,
    price,
    stockQuantity,
    category,
    image,
  });

  await newProduct.save();

  res.status(201).send(newProduct);
};
