import { RequestHandler } from "express";
import Order from "../../models/orders";

export const myOrder: RequestHandler = async (req, res, next) => {
  const userId = req.currentUser?.id;
  console.log(req.currentUser)
  // const userId = req.body

  try {
    // const orders = await Order.find({ user: userId });
    const orders = await Order.find({ user: userId });

    // console.log(orders);

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
