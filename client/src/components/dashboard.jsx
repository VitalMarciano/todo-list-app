import React, { useState } from "react";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";
import Context from "../utils/context";


const Dashboard = () => {
  const { state, dispatch } = React.useContext(Context);
  const username=state.user;

  const fetchTasks = async () => {
    try {
      
      const response = await fetch(`http://localhost:3001/tasks/${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      console.log(data);
      dispatch({ type: "SET_TASKS", param: data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className=" flex items-center  justify-center min-h-screen">
      <CreateTask fetchTasks={fetchTasks} />
      <ListTasks fetchTasks={fetchTasks} />
  </div>

    </>
  );
};

export default Dashboard;
