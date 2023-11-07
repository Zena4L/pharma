import { RequestHandler } from "express";
import Cart from "../../models/cart";
import mongoose from "mongoose";

export const addToCart: RequestHandler = async (req, res, next) => {
  try {
   
    res.status(200).send('hello')
  } catch (err) {
    console.log(err)
    throw new Error()
  }
};
