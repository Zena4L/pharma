import { RequestHandler } from "express";
import Order from "../../models/orders";

export const allOrders: RequestHandler = async (req, res, next) => {
  try {
    const orders = await Order.find().populate({
      path: "user",
      select: "-email -role -id",
    });

    res.status(200).json({
      length: orders.length,
      orders,
    });
  } catch (error) {
    throw new Error();
  }
};
