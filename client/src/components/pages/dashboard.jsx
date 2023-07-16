
import React, { useState } from "react";
import CreateTask from "../CreateTask";
import ListTasks from "../ListTasks";
import Context from "../../utils/context";


const Dashboard = () => {
  const { state, dispatch } = React.useContext(Context)

  return (
    <>
      <div className=" flex   justify-center items-start mt-20 min-h-screen">

        <ListTasks />
        <div className=" relative place-self-end object-cover z-auto mb-11 ">
        <CreateTask text={""} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
