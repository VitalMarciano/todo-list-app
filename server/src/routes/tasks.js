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
  const id=req.body._id;
  const task = await TaskModel.findByIdAndUpdate({_id: id} , req.body);
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
    const tasks2 = await TaskModel.find({assignees: req.params.username});
  
    const data= tasks.concat(tasks2);
    res.json(data);
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
