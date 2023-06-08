import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./taskForm";
import axios from "axios";
import Context from "../utils/context";

const CreateTask = () => {
  const [showModal, setShowModal] = useState(false); // Initially hide the modal
  const { state, dispatch } = React.useContext(Context);

  const handleSubmit = async (task) => {
    const taskId = uuidv4(); // Generate a unique ID for the task
    const newTask = { ...task, id: taskId }; // Add the ID to the task object

    const prev = state.tasks;
    //const newList = prev ? [...prev, newTask] : [newTask];
    const newList =[...state.tasks, newTask];
    console.log(newTask);
    try {
        await axios.post("http://localhost:3001/auth/tasks", {
        id: taskId,
        username: state.user,
        name: task.name,
        content: task.content,
        tags: task.tags,
        dueDate: task.dueDate,
        priority: task.priority,
        subTasks: "",
        assignees: "",
        status: task.status,
      });


    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
    localStorage.setItem("tasks", JSON.stringify(newList));
    console.log("newList");
    console.log(newList);

    console.log("state.tasks");
    console.log(state.tasks);
  
    
    dispatch({ type: "SET_TASKS", param: newList });
    console.log(state.tasks);

    toast.success("Task Created");

    setShowModal(false); // Hide the modal after submitting
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev); // Toggle the visibility of the modal
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 fixed bottom-4 right-4 flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-110"
        onClick={toggleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <TaskForm handleSubmit={handleSubmit} onClose={toggleModal} />
        </div>
      )}
    </>
  );
};

export default CreateTask;
