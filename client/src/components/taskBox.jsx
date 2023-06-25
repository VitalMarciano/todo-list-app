import { useDrag } from "react-dnd";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import TaskForm from "./taskForm";
import Context from "../utils/context";

const Task = ({ task,handleSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { state, dispatch } = React.useContext(Context);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { _id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleRemove = (id) => {
    const prevTasks = state.tasks;
    const updatedTasks = prevTasks.filter((t) => t._id !== id);
    toast("Task Removed");
    console.log(id);
    // Send DELETE request to delete task from the database
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Task not found");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Optional: Log the response from the server
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch({ type: "SET_TASKS", param: updatedTasks });
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev); // Toggle the visibility of the modal
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveTask = (editedTask) => {
      handleSave(editedTask);
      setIsEditing(false);
      
  };

  let priorityColor;

  
  switch (task.priority) {
    case "low":
      priorityColor = "bg-emerald-200 dark:bg-emerald-500 ";
      break;
    case "medium":
      priorityColor = "bg-amber-200 dark:bg-amber-500";
      break;
    case "high":
      priorityColor = "bg-rose-200 dark:bg-rose-500";
      break;
    default:
      priorityColor = "bg-slate-200 dark:bg-slate-500";
  }

  return (
    <div
      key={task._id}
      ref={drag}
      className={`relative p-4 mt-8 shadow-md rounded-md ${
        isDragging ? "opacity-25" : "opacity-100"
      } cursor-grab ${priorityColor} dark:text-slate-100`}
    >
      {isEditing ? (
        <TaskForm
          initialTask={task}
          handleSubmit={handleSaveTask}
          onClose={toggleEdit}
        />
      ) : (
        <>
          <p>{task.name}</p>
          <p>{task.content}</p>
          <p>{task.tags}</p>
          <p>{task.dueDate}</p>
          <p>{task.priority}</p>
          <button
            className="absolute bottom-1 right-1 text-slate-400"
            onClick={() => handleRemove(task._id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button
            className="absolute top-1 right-1 text-slate-400"
            onClick={handleEdit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
