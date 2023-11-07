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

import "express-async-errors";

const app = express();

app.use(json());

morgan("dev");

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(signup);
app.use(signin);
app.use(signout);
app.use(currentuser);

app.use(newProduct);

app.all("*", (req, res, next) => {
  return next(new NotFoundError(req));
});
app.use(globalError);
export default app;
