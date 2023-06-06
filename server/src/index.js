import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js';
import { taskRouter } from './routes/tasks.js';
const app=express();

app.use(express.json());
app.use(cors()); //

app.use("/auth", userRouter); 
app.use("/auth", taskRouter); 
mongoose.connect(
    "mongodb+srv://vital:Password123@todo.9phueie.mongodb.net/todo?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    ); // connect to DB

app.listen(3001, () => console.log("server started!!"));