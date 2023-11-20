import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username: username });

    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "user not found register instead" });
    }

    const checkPass = bcrypt.compareSync(password, existingUser.password);

    if (!checkPass)
      return res.status(500).json({ message: "invalid password" });

    return res.status(200).json(existingUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
