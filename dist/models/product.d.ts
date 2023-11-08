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
declare const Product: ProductModel;
export default Product;
