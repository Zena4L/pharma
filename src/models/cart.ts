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
const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Assuming the product is related to a "Product" model
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    quantity: {
      type: Number,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
  }
);

// cartSchema.statics.build = (attrs: CartAttrs) => {
//   return new Cart(attrs);
// };

// const Cart = mongoose.model<CartDoc, CartModel>('Cart', cartSchema);
const Cart = mongoose.model('Cart',cartSchema)

export default Cart;
