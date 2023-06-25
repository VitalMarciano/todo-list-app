import React, { useState } from "react";
import toast from "react-hot-toast";
import { fetchTasks } from "../utils/lib";
import TaskForm from "./taskForm";
import Context from "../utils/context";

const CreateTask = () => {
  const [showModal, setShowModal] = useState(false); // Initially hide the modal
  const { state, dispatch } = React.useContext(Context);

  const handleSubmit = async (task) => {

    try {
      const response = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: state.user,
          name: task.name,
          content: task.content,
          tags: task.tags,
          dueDate: task.dueDate,
          priority: task.priority,
          subTasks: "",
          assignees: "",
          status: task.status,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      toast.success("Task Created");
      setShowModal(false); // Hide the modal after submitting
      await fetchTasks(state.user, dispatch);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
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
