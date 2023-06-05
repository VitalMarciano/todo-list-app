import React, { useState } from "react";
import CreateTask from "./createTask";
import ListTasks from "./listTasks";
import Context from "../utils/context"

const Dashboard = () => {

  return (
    <>
      <CreateTask/>
      <ListTasks/>

    </>
  );
};

export default Dashboard;
