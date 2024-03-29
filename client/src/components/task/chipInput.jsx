import React, { useState } from "react";

const ChipInputField = ({ type, task, onUpdateTask }) => {
  const [emailChips, setEmailChips] = useState(task.assignees || []);
  const [tagChips, setTagChips] = useState(task.tags || []);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === " " && inputValue.trim() !== "") {
      e.preventDefault();
      if (type === "email") {
        const updatedEmails = [...emailChips, inputValue.trim()];
        setEmailChips(updatedEmails);
        onUpdateTask({ ...task, assignees: updatedEmails });
      } else if (type === "text") {
        const updatedTags = [...tagChips, inputValue.trim()];
        setTagChips(updatedTags);
        onUpdateTask({ ...task, tags: updatedTags });
      }
      setInputValue("");
    }
  };

  const handleRemoveEmailChip = (index) => {
    const updatedEmails = emailChips.filter((_, chipIndex) => chipIndex !== index);
    setEmailChips(updatedEmails);
    onUpdateTask({ ...task, assignees: updatedEmails });
  };

  const handleRemoveTagChip = (index) => {
    const updatedTags = tagChips.filter((_, chipIndex) => chipIndex !== index);
    setTagChips(updatedTags);
    onUpdateTask({ ...task, tags: updatedTags });
  };

  return (
    <div className="flex flex-col space-y-2">
   
        <input
          type={type}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={type === "email" ? "Enter an user" : "Enter a tag"}
          className="taskforminput h-10 mb-2"
        />
      <div className="flex flex-wrap overflow-y-auto h-12">
        {type === "email" ? (
          emailChips.map((chip, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-blue-500 m-1 text-white py-1 px-2 rounded-full"
            >
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span className="whitespace-nowrap">{chip}</span>
              <button
                type="button"
                onClick={() => handleRemoveEmailChip(index)}
                className="bg-blue-200 text-blue-700 rounded-full p-1 m-1 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))
        ) : (
        
          tagChips.map((chip, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-blue-500 text-white m-1 py-1 px-2 rounded-full"
            >
              <span className="whitespace-nowrap">{chip}</span>
              <button
                type="button"
                onClick={() => handleRemoveTagChip(index)}
                className="bg-blue-200 text-blue-700 rounded-full p-1 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
       
            </div>

          ))
        )}
        
      </div>

    </div>
  );
};

export default ChipInputField;
