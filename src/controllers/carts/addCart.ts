import { RequestHandler } from "express";
import Cart from "../../models/cart";
import mongoose from "mongoose";

export const addToCart: RequestHandler = async (req, res, next) => {
  try {
   
    if(!req.body.product) req.body.product = req.params.id;
    // if(!req.body.user) req.body.user = req.currentUser?.id;

    // const {quantity} = req.body;
    // const productId = new mongoose.Types.ObjectId(req.body.product);

    // const cart = Cart.build({
    //   user: req.body.user,
    //   product: productId,
    //   quantity,
    // });

    console.log(req.currentUser)
    res.status(200).send('helo')

  } catch (err) {
    console.log(err)
    res.status(500).send({ message: "Failed to update the cart" });
  }
};
