import path from "path";

import { RequestHandler } from "express";
import Order from "../../models/orders";
import Cart from "../../models/cart";

import { BadRequestError } from "../../errors/badRequestError";
// import multer, { FileFilterCallback } from "multer";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadPath = path.join(__dirname, "../../public/prescriptions");
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const extension = file.originalname.split(".").pop();
//     cb(null, "image-" + uniqueSuffix + "." + extension);
//   },
// });

// export const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb: FileFilterCallback) => {
//     const filetypes = /jpeg|jpg|png/;
//     const extname = filetypes.test(
//       path.extname(file.originalname).toLowerCase()
//     );
//     const mimetype = filetypes.test(file.mimetype);
//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb(new Error("Invalide file"));
//       // cb(null,false);
//     }
//   },
// }).array("image", 10);

export const checkout: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.currentUser?.id;
    // const prescriptionImage = req.files as Express.Multer.File[];

    // if (!prescriptionImage || prescriptionImage.length === 0) {
    //   return next(new BadRequestError("Upload a prescription "));
    // }
    const { image } = req.body;
    if (!image) {
      return next(new BadRequestError("Upload a prescription "));
    }

    const userCart = await Cart.findOne({ userId }).populate(
      "products.productId"
    );

    if (!userCart) {
      return res.status(400).json({ error: "User cart not found" });
    }

    const total = userCart.products.reduce((acc, product) => {
      return acc + product.quantity * product.price;
    }, 0);

    const order = new Order({
      user: userId,
      orderDate: new Date(),
      status: "pending",
      orderItems: userCart.products,
      total,
      image,
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
