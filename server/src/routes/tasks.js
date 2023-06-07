import express from "express";

import { TaskModel } from "../models/Task.js";

const router = express.Router();

// GET all tasks

// Creating new task
router.post("/", async (req, res) => {
  const task = new TaskModel({
    id: req.body.id,
    username: req.body.username,
    name: req.body.name,
    content: req.body.content,
    tags: req.body.tags,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
    subTasks: req.body.subTasks,
    assignees: req.body.assignees,
    status: req.body.status,
  });
  try {
    const result = await task.save();
    res.json({ message: "added task!" });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

// update task
router.put("/", async (req, res) => {
  const task = await TaskModel.findById(req.body.id);
  try {
    await task.save();
    res.status(201).json({ message: "task updated!" });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Get tasks by username
router.get("/:username", async (req, res) => {
  try {
    
    const tasks = await TaskModel.find({ username: req.params.username });
    console.log(tasks);
    res.json(tasks);
   
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
export { router as taskRouter };
