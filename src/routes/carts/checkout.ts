import { Router } from "express";
import { loggedIn } from "../../middlewares/loggedIn";
import { checkout, upload } from "../../controllers/carts/checkout";
// import multer from "multer";
// import path from "path";

// const uploadPath = path.join(__dirname, "../public/files");

// const upload = multer({ dest: uploadPath });

const router = Router();

router.post("/api/v1/checkout", loggedIn, upload, checkout);

export { router as checkout };
