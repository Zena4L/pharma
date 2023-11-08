import mongoose, { Document, Model } from "mongoose";
interface OrderItem {
    productId: mongoose.Types.ObjectId;
    quantity: number;
    name: string;
    price: number;
}
interface OrderAttrs {
    user: mongoose.Types.ObjectId;
    orderDate: Date;
    status: string;
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
declare const Order: OrderModel;
export default Order;
