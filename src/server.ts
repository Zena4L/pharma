import app from "./app";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import {createServer} from 'http'

dotenv.config({
    path:'config.env'
})

const start = async () => {

    try {
      await mongoose.connect(process.env.MONGO_URI!);
      console.log(" Database Connected");
    } catch (err) {
      console.log(err);
    }
    const server = createServer(app);
    server.listen(3000, () => {
      console.log("server is live on port 3000");
    });
  };
  
  start();