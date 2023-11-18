import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({
      username: username,
      password: password,
    });

    await newUser.save();

    return res.json(newUser);
  } catch (error) {
    return res.json({ error: `${error.message}` });
  }
});

export default router;
