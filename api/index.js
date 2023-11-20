import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import cors from "cors";

import registerRoute from "./routes/register.js";
import loginRoute from "./routes/login.js";

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => console.log("database connected"))
  .catch((err) => console.log(err.message));

// middle wares
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// routes
app.use("/register", registerRoute);
app.use("/login", loginRoute);

// testing
app.get("/test", (req, res) => res.send("test ok"));

app.listen(4000, () => console.log("server is running on port 4000"));
