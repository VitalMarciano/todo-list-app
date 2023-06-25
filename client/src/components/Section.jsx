import { useDrop } from "react-dnd";
import React, { useEffect } from "react";
import Header from "./header";
import Task from "./taskBox";
import toast from "react-hot-toast";
import Context from "../utils/context";
import { fetchTasks } from "../utils/lib";

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
  const handleSave = async (editedTask) => {
    await fetch(`http://localhost:3001/tasks`, {
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
      .then(async (data) => {
        await fetchTasks(state.user, dispatch);
        toast.success("Task Updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addItemToSection = (task) => {
    const taskToAdd = { ...task, status: status };
    handleSave(taskToAdd);
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
