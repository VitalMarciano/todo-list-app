import React, { useState } from "react";
import toast from "react-hot-toast";
import { saveTask } from "../../utils/lib";
import TaskForm from "./TaskForm";
import Context from "../../utils/context";

const CreateTask = ({text}) => {
  const [showModal, setShowModal] = useState(false); // Initially hide the modal
  const { state, dispatch } = React.useContext(Context);

  const handleSubmit = async (task) => {
    try {
      await saveTask(task, state, dispatch);
      toggleModal();
      toast.success("Task Created");
    } catch (error) {
      console.log(error);
    }
  };


  const toggleModal = () => {
    dispatch({ type: "SET_VIEW", param: "home" });
    setShowModal((prev) => !prev); // Toggle the visibility of the modal
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-slate-100 font-semibold gap-2 rounded-md w-auto px-3 py-3  flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-110 dark:bg-blue-700"
        onClick={toggleModal}
      >

         {text}
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
