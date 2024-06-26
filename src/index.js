// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import express from "express";
import { app } from "./app.js";
import connectDB from "./db/index.js";
const apps = express();
apps.use(express.json());
apps.use(express.urlencoded({ extended: true }));
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(` server is running at port ${8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed!!", err);
  });

/*
import express from "express";
const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listing on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error", error);
  }
})();
*/
