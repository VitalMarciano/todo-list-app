
import React, { useState } from "react";
import CreateTask from "../task/CreateTask";
import ListTasks from "../task/ListTasks";
import Context from "../../utils/context";


const Dashboard = () => {
  const { state, dispatch } = React.useContext(Context)

  return (
    <div className="relative">
      <div className="flex justify-center items-start mt-20 min-h-screen">
        <ListTasks />
      </div>
      <div className="fixed bottom-4 right-80 max-sm:right-8">
        <CreateTask text={""} />
      </div>
    </div>
  );
};

export default Dashboard;
