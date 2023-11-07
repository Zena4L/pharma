import mongoose, { Document, Model, Schema } from 'mongoose';

// interface CartAttrs {
//   user: mongoose.Types.ObjectId;
//   product: mongoose.Types.ObjectId;
//   quantity: number;
// }

// interface CartModel extends mongoose.Model<CartDoc> {
//   build(attrs: CartAttrs): CartDoc;
// }

// interface CartDoc extends mongoose.Document{
//   user: mongoose.Types.ObjectId;
//   product: mongoose.Types.ObjectId;
//   quantity: number;
// }
const cartSchema = new mongoose.Schema({
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      qty: {
        type: Number,
        default: 0,
      },
      price: {
        type: Number,
        default: 0,
      },
      title: {
        type: String,
      },
      productCode: {
        type: String,
      },
    },
  ],
  totalQty: {
    type: Number,
    default: 0,
    required: true,
  },
  totalCost: {
    type: Number,
    default: 0,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// cartSchema.statics.build = (attrs: CartAttrs) => {
//   return new Cart(attrs);
// };

// const Cart = mongoose.model<CartDoc, CartModel>('Cart', cartSchema);
const Cart = mongoose.model('Cart',cartSchema)

export default Cart;
