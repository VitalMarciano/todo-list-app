import React, { useContext } from "react";
import Task from "./taskBox";
import Context from "../utils/context";
import Header from "./header";
const SearchResults = () => {
  const { state, dispatch } = React.useContext(Context);
  const filteredTasks = state.ftasks;

  const handleSaveTask = (editedTask) => {
    // Handle saving the edited task
    // You can define your own logic here
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen w-1/2 ">
      <Header text={"text"} bg={"blue"} count={state.ftasks.length} />
      {filteredTasks.map((task) => (
        <Task key={task._id} task={task} handleSave={handleSaveTask} />
      ))}
    </div>
  );
};

export default SearchResults;