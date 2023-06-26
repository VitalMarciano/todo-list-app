import React, { useState } from "react";

const ChipInputField = ({ type, task, onUpdateTask }) => {
  const [emailChips, setEmailChips] = useState(task.assignees || []);
  const [tagChips, setTagChips] = useState(task.tags || []);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target || {};
    setInputValue(value);
  };

  const handleAddChip = () => {
    if (inputValue.trim() !== "") {
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
    const updatedEmails = emailChips.filter(
      (_, chipIndex) => chipIndex !== index
    );
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
      {type === "email" && (
        <div className="flex items-center space-x-2">
          {emailChips.map((chip, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-blue-500 text-white py-1 px-2 rounded-full"
            >
              <span className="whitespace-nowrap">{chip}</span>
              <button
                type="button"
                onClick={() => handleRemoveEmailChip(index)}
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
          ))}
          <input
            type={type}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter an email address"
            className="taskforminput h-10"
          />
          <button
            type="button"
            onClick={handleAddChip}
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Email
          </button>
        </div>
      )}

      {type === "text" && (
        <div className="flex items-center space-x-2">
          {tagChips.map((chip, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-blue-500 text-white py-1 px-2 rounded-full"
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
          ))}
          <input
            type={type}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a tag"
            className="taskforminput h-10"
          />
          <button
            type="button"
            onClick={handleAddChip}
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Tag
          </button>
        </div>
      )}
    </div>
  );
};

export default ChipInputField;
