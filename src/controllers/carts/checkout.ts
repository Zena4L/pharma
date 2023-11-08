import { RequestHandler } from "express";
import Order from "../../models/orders";
import Cart from "../../models/cart";

export const checkout: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.currentUser?.id;
    const userCart = await Cart.findOne({ userId }).populate(
      "products.productId"
    );

    if (!userCart) {
      return res.status(400).json({ error: "User cart not found" });
    }

    const total = userCart.products.reduce((acc, product) => {
      return acc + product.quantity * product.price;
    }, 0);

    const { status } = req.body;
    const order = new Order({
      user: userId,
      orderDate: new Date(),
      status,
      orderItems: userCart.products,
      total,
    });

    await order.save();
    userCart.products = [];
    await userCart.save();

    res.status(200).send(order);
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
