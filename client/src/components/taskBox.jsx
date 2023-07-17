import { useDrag } from "react-dnd";
import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import TaskForm from "./TaskForm";
import Context from "../utils/context";
import updateTask from "../utils/lib";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const { state, dispatch } = React.useContext(Context);
  const [showBorder, setBorder]= useState(state.user==task.username);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { task: task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleRemove = (id) => {
    const prevTasks = [...state.tasks];
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
    console.log(state.tasks);
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev); // Toggle the visibility of the modal
  };
  const handleEdit = () => {
    setIsEditing(true);
  };


  const handleSave = async (editedTask) => {
    try {
      await updateTask(editedTask, state, dispatch);
      setIsEditing(false);
      toast.success("Task Updated");
    } catch (error) {
      console.log(error);
    }
  };
  let priorityColor;

  switch (task.priority) {
    case "low":
      priorityColor = "bg-emerald-400 dark:bg-emerald-500 ";
      break;
    case "medium":
      priorityColor = "bg-amber-400 dark:bg-amber-500";
      break;
    case "high":
      priorityColor = "bg-rose-400 dark:bg-rose-500";
      break;
    default:
      priorityColor = "bg-slate-400 dark:bg-slate-500";
  }
  const bordercolor= "border-cyan-300 border-2";

  return (
    <div
      key={task._id}
      ref={drag}
      className={`relative p-4 mt-8 shadow-md rounded-md  ${
        isDragging ? "opacity-25" : "opacity-100"
      } cursor-grab bg-slate-200 dark:bg-slate-500 dark:text-slate-100 ${showBorder?"":bordercolor}`}
    >
      {isEditing ? (
        <TaskForm
          initialTask={task}
          handleSubmit={handleSave}
          onClose={toggleEdit}
        />
      ) : (
        <>
          <h4 className="block font-medium dark:text-slate-200">{task.name}</h4>
          <p>

              {task.tags!="" ? (
                 <span className="inline-flex items-baseline gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6z"
                  />
                </svg>
                {task.tags}
            </span>
              ) : (
                <></>
              )}

          </p>
          <p>
          {task.dueDate !="" ? (
            <span className="inline-flex items-baseline gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              {task.dueDate}
            </span>):<></>}
          </p>

          <div
            className={`flex items-center gap-2 ${priorityColor} text-white font-semibold m-1 py-1 px-3 rounded-full w-fit `}
          >
            {task.priority}
          </div>
          {task.assignees !="" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>):<></>}
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
              className="w-4 h-4"
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
