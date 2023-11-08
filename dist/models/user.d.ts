import mongoose from "mongoose";
interface UserAttrs {
    email: string;
    password: string;
    profile: {
        name: string;
        address: string;
    };
}
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    profile: {
        name: string;
        address: string;
    };
}
declare const User: UserModel;
export default User;
