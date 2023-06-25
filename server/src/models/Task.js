import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  content: { type: String, required: true },
  
  tags: { type: [String], required: false },
  dueDate: { type: String, required: false },
  priority: { type: String, required: false },
  subTasks: { type: String, required: false },
  assignees: {type:[String], required: false  },
  status: { type: String, required: true },
});

export const TaskModel = mongoose.model("tasks", taskSchema); //table named tasks
