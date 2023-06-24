import React, { useState } from "react";
import toast from "react-hot-toast";
import ChipInputFeild from "./chipInput"
const TaskForm = ({ initialTask, handleSubmit, onClose }) => {
  const [showModal, setShowModal] = useState(true); // Initially hide the modal
  const [task, setTask] = useState(
    initialTask || {
      _id: null,
      name: "",
      content: "",
      tags: [],
      dueDate: "",
      priority: "",
      subTasks: [],
      assignees: [],
      status: "todo",
    }
  );


  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (task.name.length < 3) {
      return toast.error("A task must have more than 3 characters");
    }
    if (task.name.length > 100) {
      return toast.error("A task must not exceed 100 characters");
    }
    const updatedTask = {
      ...task,
      _id: task._id, // Generate a new id if it doesn't exist
    };
    handleSubmit(updatedTask);

    setTask({
      _id: "",
      name: "",
      content: "",
      tags: [],
      dueDate: "",
      priority: "",
      subTasks: [],
      assignees: [],
      status: "todo",
    });
  };
  const handleUpdateTask = (updatedTask) => {
    setTask(updatedTask);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };
  if (!showModal) {
    return null; // Don't render the modal if showModal is false
  }
  const currentDate = new Date().toISOString().split("T")[0];
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="relative bg-slate-300 p-4 rounded-md dark:bg-gray-800">
        <button
          className="absolute top-1 right-2 text-black px-4 py-2 rounded-full mt-4  "
          onClick={handleClose}
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
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <form onSubmit={handleFormSubmit} className="flex justify-start w-200">
          <div className="flex flex-col space-y-2  bg-white bg-opacity-30 p-10 rounded-md dark:bg-opacity-10">
            <label htmlFor="name" className="formlbl">
              Task Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="taskforminput h-10"
              value={task.name}
              onChange={handleInputChange}
            />
            
            <label htmlFor="content" className="formlbl">
              Task Content:
            </label>
            <textarea
              id="content"
              name="content"
              className="taskforminput h-32"
              value={task.content}
              onChange={handleInputChange}
            />

            <label htmlFor="tags" className="formlbl">
              Task Tags:
            </label>
          
            <ChipInputFeild task={task} onUpdateTask={handleUpdateTask} ></ChipInputFeild>
            <label htmlFor="dueDate" className="formlbl">
              Due Date:
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="taskforminput h-10"
              value={task.dueDate}
              min={currentDate}
              onChange={handleInputChange}
            />
            <label htmlFor="priority" className="formlbl">
              Priority:
            </label>
            <select
              id="priority"
              name="priority"
              className="taskforminput h-10"
              value={task.priority}
              onChange={handleInputChange}
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <button
              className="bg-cyan-500 rounded-md px-4 h-12 text-white"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
