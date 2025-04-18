// require("dotenv").config({ path: "./.env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", () => {
      console.log("Application is not taking to database", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection Fialed !!!!", error);
  });

/* 
import express from "express";

const app = express();

 IFFE

(async () => {
  try {
    await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("Application is not taking to database", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();

// function connectDB() {}

//connectDB();

*/
