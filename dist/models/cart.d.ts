import mongoose, { Document, Model } from "mongoose";
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
declare const Cart: CartModel;
export default Cart;
