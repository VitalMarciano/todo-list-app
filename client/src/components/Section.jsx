import { useDrop } from "react-dnd";
import React, { useEffect } from "react";
import Header from "./header";
import Task from "./taskBox";
import toast from "react-hot-toast";
import Context from "../utils/context";
import { fetchTasks, updateTask } from "../utils/lib";

const Section = ({ status, todos, inProgress, closed }) => {
  const { state, dispatch } = React.useContext(Context);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.task),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let bg = "bg-blue-500 dark:bg-blue-700";
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "In Progress";
    bg = "bg-purple-500 dark:bg-purple-700";
    tasksToMap = inProgress;
    
  }
  if (status === "closed") {
    text = "Closed";
    bg = "bg-green-500 dark:bg-green-700";
    tasksToMap = closed;
    
  }
  // handle save task
  const handleSave = async (editedTask) => {
    try {
      await updateTask(editedTask, state, dispatch);
      toast.success("Task Updated");
    } catch (error) {
      console.log(error);
    }
  };

  const addItemToSection = async (task) => {
    const taskToAdd = { ...task, status: status };
    await handleSave(taskToAdd);
    //await fetchTasks(state.user, dispatch);
  };
  return (
    <div
      ref={drop}
      className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}
    >

      <Header text={text} bg={bg} count={tasksToMap.length} />

      {tasksToMap.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
};

export default Section;
