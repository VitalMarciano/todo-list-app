import express from "express";

import { TaskModel } from "../models/Task.js";

const router = express.Router();

// GET all tasks

// Creating new task
router.post("/tasks", async (req, res) => {
  const {
    id,
    username,
    name,
    content,
    tags,
    dueDate,
    priority,
    subTasks,
    assignees,
    status,
  } = req.body;
  const task = new TaskModel({
    id,
    username,
    name,
    content,
    tags,
    dueDate,
    priority,
    subTasks,
    assignees,
    status,
  });

  await task.save();
  res.json({ message: "added task!" });
});

export { router as taskRouter };
