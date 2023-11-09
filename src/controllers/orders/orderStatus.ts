import { RequestHandler } from "express";
import Order from "../../models/orders";

export const orderStatus: RequestHandler = async (req, res, next) => {
  try {
    const { orderId, status } = req.body;
    const order = await Order.findById(orderId);

    if (order?.status) order.status = status;

    order?.save();
    console.log(order?.status);

    res.status(200).send(order);
  } catch (error) {
    throw new Error();
  }
};
