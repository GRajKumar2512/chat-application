import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashPass = bcrypt.hashSync(password);

    const newUser = new User({
      username: username,
      email: email,
      password: hashPass,
    });

    await newUser.save();

    jwt.sign({ id: newUser._id });
  } catch (error) {
    return res.json({ error: `${error.message}` });
  }
});

export default router;
