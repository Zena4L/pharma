import { RequestHandler } from "express";
import Cart from "../../models/cart";
import Product from "../../models/product";

export const addToCart: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.userId) req.body.userId = req.currentUser?.id;

    const { userId } = req.body;
    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      const newCart = Cart.build({ userId, products: [] });
      await newCart.save();
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const cartProduct = {
      productId: product._id,
      quantity,
      name: product.name,
      price: product.price,
    };

    cart?.products.push(cartProduct);

    await cart?.save();

    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
