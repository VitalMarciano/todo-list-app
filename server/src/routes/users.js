import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password, name, lastName, email, birthday } = req.body;
  const user = await UserModel.findOne({ username }); // we can also write findOne({username}) cause the key=val

  if (user) {
    return res.json({ message: "User already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10); //hash the password for user security

  const newUser = new UserModel({
    username,
    password: hashedPassword,
    name,
    lastName,
    email,
    birthday,
  });
  await newUser.save();
  res.json({ message: "User Registered Successfully!" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username }); 

  if (!user) {
    return res.json({ message: "User Doesn't Exists!" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ message: "Username or Password is incorrect!" });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});


// Get email by username
router.get("/:username", async (req, res) => {
  try {
    const email = await TaskModel.find({ username: req.params.username });
    console.log(tasks);
    res.json(email);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export { router as userRouter };

