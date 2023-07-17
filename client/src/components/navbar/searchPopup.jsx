import React, { useState, useContext } from "react";
import Context from "../../utils/context";
import SearchBar from "./searchBar";

const SearchPopUp = ({onClose}) => {
  const [showModal, setShowModal] = useState(false); // Initially hide the modal
  const { state, dispatch } = React.useContext(Context);

  const toggleModal = () => {
    setShowModal((prev) => !prev); // Toggle the visibility of the modal
  };

  return (
    <>
      <button
        className="flex px-4 py-2 ml-1 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        type="submit"
        onClick={toggleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {showModal && (
        <div className={`fixed inset-0 flex items-center justify-center h-auto z-50 backdrop-blur-sm`}>
          <div className="relative  bg-slate-300 p-4 rounded-md dark:bg-gray-800">
            <button
              className="relative justify-self-end top-1 text-black px-4 py-2 rounded-full  "
              onClick={toggleModal}
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
            <SearchBar setShow={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPopUp;
