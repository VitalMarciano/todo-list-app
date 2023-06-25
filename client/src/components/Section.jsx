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
    drop: (item) => addItemToSection(item._id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let bg = "bg-blue-500";
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
  // handle save task 
  const handleSave = (editedTask) => {
    const prevTasks = state.tasks;
    console.log(state.tasks);
    const updatedTasks = prevTasks.map((t) =>
      t._id === editedTask._id ? editedTask : t
    );
    fetch(`http://localhost:3001/tasks`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: editedTask._id,  
        username: editedTask.username,
        name: editedTask.name,
        content: editedTask.content,
        tags: editedTask.tags,
        dueDate: editedTask.dueDate,
        priority: editedTask.priority,
        subTasks: "",
        assignees: "",
        status: editedTask.status,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Task not found");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Optional: Log the response from the server
        toast.success("Task Updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addItemToSection = (id) => {
    const prev = state.tasks;
    let task=null;
    console.log("prev");
    console.log(prev);
    const mTasks = prev.map((t) => {
      if (t._id === id) {
        console.log("before");
        console.log(t);
        t.status=status;
        console.log("after");
        console.log(t);
        task=t;
        return task;
      }
      task=t
      return t;
    });
    handleSave(task)
    console.log(mTasks);
    dispatch({ type: "SET_TASKS", param: mTasks });
    
  };

  return (
    <div
      ref={drop}
      className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}
    >
      <Header  text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.map((task) => (
        <Task key={task._id} task={task} handleSave={handleSave}/>
      ))}
    </div>
  );
};

export default Section;
