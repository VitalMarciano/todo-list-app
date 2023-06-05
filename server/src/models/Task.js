import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    username: {type: String, required: true },
    name: {type: String, required: true },
    content: {type: String, required: true },
    tags: {type: String, required: true },
    dueDate: {type: String, required: true },
    priority: {type: String, required: true },
    subTasks: {type: String, required: true },
    assignees: {type: String, required: true },
    status: {type: String, required: true },

});

export const TaskModel=mongoose.model("users", userSchema); //table named users