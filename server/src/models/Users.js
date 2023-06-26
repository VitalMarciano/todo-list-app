import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true },
    password: {type: String, required: true },
    email: {type: String, required: true },
    name: {type: String, required: true },
    lastName: {type: String, required: true },
    birthday: {type: String, required: true },

});

export const UserModel=mongoose.model("users", userSchema); //table named users