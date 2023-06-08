import React, { useState } from "react";
import CreateTask from "./createTask";
import ListTasks from "./listTasks";
import Context from "../utils/context"


const Dashboard = () => {

  return (
    <>
    <div className=" flex items-center  justify-center min-h-screen">
      <CreateTask/>
      <ListTasks/>
  </div>
    </>
  );
};

export default Dashboard;
