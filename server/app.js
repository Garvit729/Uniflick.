import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import sharp from "sharp"; 
import { v2 as cloudinary } from 'cloudinary';

import cookieParser from "cookie-parser"; 

dotenv.config();
const app = express();
app.use(cookieParser());
//app.use(credentials);
//app.use(cors(corsOptions));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));





// MONGOOSE SETUP 
const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));