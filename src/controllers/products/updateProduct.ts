import { RequestHandler } from "express";
import Product from "../../models/product";
export const updateProduct: RequestHandler = async (req, res, next) => {
  const { name, description, price, stockQuantity, category, image } = req.body;

  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        stockQuantity,
        category,
        image,
      },
      { new: true }
    );

    await updateProduct?.save()

    res.status(200).send(updateProduct);
  } catch (err) {
    console.log(err);
  }
};
