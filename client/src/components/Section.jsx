import { useDrop } from "react-dnd";
import React from "react";
import Header from "./header";
import Task from "./taskBox";

import toast from "react-hot-toast";
import Context from "../utils/context";

const Section = ({ status, todos, inProgress, closed }) => {
  const { state, dispatch } = React.useContext(Context);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let bg = "bg-slate-500";
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "In Progress";
    bg = "bg-purple-500";
    tasksToMap = inProgress;
  }
  if (status === "closed") {
    text = "Closed";
    bg = "bg-green-500";
    tasksToMap = closed;
  }

  const addItemToSection = (id) => {
    const prev = state.tasks;
    console.log(prev);
    const mTasks = prev.map((t) => {
      if (t.id === id) {
        return { ...t, status: status };
      }
      return t;
    });
    console.log(mTasks);
    localStorage.setItem("tasks", JSON.stringify(mTasks));
    toast("Task status changed");
    dispatch({ type: "SET_TASKS", param: mTasks });
  };

  return (
    <div
      ref={drop}
      className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}
    >
      <Header text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.length > 0 &&
        tasksToMap.map((task) => (
          <Task key={task.id} task={task} />
        ))}
    </div>
  );
};

export default Section;
