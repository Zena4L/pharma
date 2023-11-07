import { RequestHandler } from "express";
import Cart from "../../models/cart";

export const addToCart: RequestHandler = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.currentUser?.id;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const cartItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (cartItem) {
      cartItem.quantity = quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();

    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send({ message: "Failed to update the cart" });
  }
};
