import path from "path";
import { RequestHandler } from "express";
import Product from "../../models/product";

import multer, { FileFilterCallback } from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../../public/uploads");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, "image-" + uniqueSuffix + "." + extension);
  },
});

export const uploadDrug = multer({
  storage: storage,
  fileFilter: (req, file, cb: FileFilterCallback) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Invalide file"));
      // cb(null,false);
    }
  },
}).array("image", 10);

export const createProduct: RequestHandler = async (req, res, next) => {
  const { name, description, price, stockQuantity, category } = req.body;
  const image = req.files as Express.Multer.File[];

  try {
    const newProduct = Product.build({
      name,
      description,
      price,
      stockQuantity,
      category,
      image: image[0].path,
    });

    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (err) {
    console.log(err);
  }
};
