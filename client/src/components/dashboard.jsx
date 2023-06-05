import React, { useState } from "react";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";

const Dashboard = ({ user, handleLogout, tasks, setTasks }) => {
  const [showCreateTask, setShowCreateTask] = useState(false);

  const toggleCreateTask = () => {
    setShowCreateTask(!showCreateTask);
  };

  return (
    <>
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />

    </>
  );
};

export default Dashboard;
