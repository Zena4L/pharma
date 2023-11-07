import mongoose, { Schema, Document, Model } from "mongoose";

interface CartItem {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  name: string;
  price: number;
}

interface CartAttrs {
  userId: mongoose.Types.ObjectId;
  products: CartItem[];
}

interface CartDoc extends Document {
  userId: mongoose.Types.ObjectId;
  products: CartItem[];
}

interface CartModel extends Model<CartDoc> {
  build(attrs: CartAttrs): CartDoc;
}

const cartSchema = new Schema<CartDoc, CartModel>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
      name: String,
      price: Number,
    },
  ],
});

cartSchema.statics.build = (attrs: CartAttrs) => {
  return new Cart(attrs);
};

const Cart = mongoose.model<CartDoc, CartModel>("Cart", cartSchema);

export default Cart;
