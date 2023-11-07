import mongoose, { Document } from "mongoose";

interface CartItem {
  product: mongoose.Schema.Types.ObjectId;
  quantity: number;
}

interface CartAttrs {
  user: mongoose.Schema.Types.ObjectId;
  items: CartItem[];
}

interface CartModel extends mongoose.Model<CartDoc> {
  build(attrs: CartAttrs): CartDoc;
}

interface CartDoc extends Document {
  user: mongoose.Schema.Types.ObjectId;
  items: CartItem[];
}

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

cartSchema.statics.build = (attrs: CartAttrs) => {
  return new Cart(attrs);
};

const Cart = mongoose.model<CartDoc, CartModel>("Cart", cartSchema);

export default Cart;
