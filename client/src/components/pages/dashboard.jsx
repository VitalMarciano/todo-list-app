
import React, { useState } from "react";
import CreateTask from "../CreateTask";
import ListTasks from "../ListTasks";
import Context from "../../utils/context";


const Dashboard = () => {
  const { state, dispatch } = React.useContext(Context)

  return (
    <>
      <div className=" flex items-center  justify-center min-h-screen">

        <ListTasks />
        <div className="object-cover z-auto fixed right-4 bottom-4">
        <CreateTask />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
