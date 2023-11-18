import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import registerRoute from "./routes/register.js";

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => console.log("database connected"))
  .catch((err) => console.log(err.message));

app.get("/test", (req, res) => res.send("test ok"));

app.use("/register", registerRoute);

app.listen(4000, () => console.log("server is running on port 4000"));
