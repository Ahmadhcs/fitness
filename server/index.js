require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";

const morgan = require("morgan");

const app = express();

//mongose connetions
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("connexted to DB"))
  .catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

//route middlewares
app.use("/api", authRoutes);

app.listen(8000, () => console.log("Server Running on Port 8000"));
