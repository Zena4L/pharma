import mongoose, { Schema, Document, Model } from "mongoose";

interface OrderItem {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  name: string;
  price: number;
}

interface OrderAttrs {
  user: mongoose.Types.ObjectId;
  orderDate: Date;
  status: string; // You can use an enum for order status
  orderItems: OrderItem[];
  total: number;
}

interface OrderDoc extends Document {
  user: mongoose.Types.ObjectId;
  orderDate: Date;
  status: string;
  orderItems: OrderItem[];
  total: number;
}

interface OrderModel extends Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}

const orderSchema = new Schema<OrderDoc, OrderModel>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "in-progress", "shipped", "delivered"],
  },
  orderItems: [
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
  total: {
    type: Number,
    required: true,
  },
});

orderSchema.statics.build = (attrs: OrderAttrs) => {
  return new Order(attrs);
};

const Order = mongoose.model<OrderDoc, OrderModel>("Order", orderSchema);

export default Order;
