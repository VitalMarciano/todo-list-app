import express from "express";
import mongoose from "mongoose";
import { TaskModel } from "../models/Task.js";
const router = express.Router();

// Creating new task
router.post("/", async(req, res) => {
  const task = new TaskModel({
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
  console.log("this is task:");
  console.log(task);
  try {
    const result = await task.save();
    console.log("this is res:");
    console.log(result._id);
    res.status(201).json({ _id: result._id }); // Return the ID of the newly created task
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

// update task
router.put("/", async (req, res) => {
  console.log("UPDAETEED");
  console.log(req.body);
  const id=req.body._id;
  const task = await TaskModel.findByIdAndUpdate({_id: id} , req.body);
  console.log(task);
  try {
    console.log("TRY TO SAVE");
    await task.save();
    res.status(201).json({ message: "task updated!" });
    console.log("save?");
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

// Get task by user mail 
router.get("/:email", async (req, res) => {
  try {
    const tasks = await TaskModel.find({ 'assignees': req.params.email });
    console.log(tasks);
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Delete task by ID
router.delete("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    console.log(taskId);
    const deletedTask = await TaskModel.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted", task: deletedTask });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export { router as taskRouter };
