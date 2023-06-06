import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    id:{type: String, required: true, unique: true},
    username: {type: String, required: true },
    name: {type: String, required: false },
    content: {type: String, required: true },
    tags: {type: String, required: true },
    dueDate: {type: String, required: true },
    priority: {type: String, required: true },
    subTasks: {type: String, required: false },
    assignees: {type: String, required: false },
    status: {type: String, required: true },

});

export const TaskModel=mongoose.model("tasks", taskSchema); //table named tasks