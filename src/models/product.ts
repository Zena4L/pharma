import mongoose from "mongoose";

interface ProductAttrs {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  image: string;
}

interface ProductModel extends mongoose.Model<ProductDoc> {
  build(attrs: ProductAttrs): ProductDoc;
}

interface ProductDoc extends mongoose.Document {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  image: string;
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  image: String,
});

productSchema.statics.build = (attrs: ProductAttrs) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>(
  "Product",
  productSchema
);

export default Product;
