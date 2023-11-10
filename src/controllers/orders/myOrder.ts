import { RequestHandler } from "express";
import Order from "../../models/orders";

export const myOrder: RequestHandler = async (req, res, next) => {
  const userId = req.currentUser?.id;

  try {
    const orders = await Order.find({ user: userId }, "id status");

    // console.log(orders);

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
