import express, { json } from "express";
import cookieSession from "cookie-session";
import morgan from "morgan";

import { NotFoundError } from "./errors/notFoundError";
import { globalError } from "./middlewares/globalError";

import { signup } from "./routes/users/signup";
import { signin } from "./routes/users/signin";
import { signout } from "./routes/users/signout";
import { currentuser } from "./routes/users/curretUser";

import { newProduct } from "./routes/products/newProduct";
import { allProduct } from "./routes/products/allProduct";
import { getProduct } from "./routes/products/getProduct";
import { updateProduct } from "./routes/products/updateProduct";
import { deleteProduct } from "./routes/products/deleteProduct";

import { addToCart } from "./routes/carts/addCart";
import { userCart } from "./routes/carts/getUserCart";

import "express-async-errors";

const app = express();

app.use(json());

morgan("dev");

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(signup);
app.use(signin);
app.use(signout);
app.use(currentuser);

app.use(newProduct);
app.use(allProduct);
app.use(getProduct);
app.use(updateProduct);
app.use(deleteProduct);

app.use(addToCart);
app.use(userCart);

app.all("*", (req, res, next) => {
  return next(new NotFoundError(req));
});
app.use(globalError);
export default app;
