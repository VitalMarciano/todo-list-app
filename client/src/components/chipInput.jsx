import React, { useState } from "react";

const ChipInputField = ({ task, onUpdateTask }) => {
  const [chips, setChips] = useState(task.tags || []);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target || {};
    setInputValue(value);
  };

  const handleAddChip = () => {
    if (inputValue.trim() !== "") {
      const updatedTags = [...chips, inputValue.trim()];
      setChips(updatedTags);
      onUpdateTask({ ...task, tags: updatedTags });
      setInputValue("");
    }
  };

  const handleRemoveChip = (index) => {
    const updatedTags = chips.filter((_, chipIndex) => chipIndex !== index);
    setChips(updatedTags);
    onUpdateTask({ ...task, tags: updatedTags });
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-blue-500 text-white py-1 px-2 rounded-full"
          >
            <span className="whitespace-nowrap">{chip}</span>
            <button
              type="button"
              onClick={() => handleRemoveChip(index)}
              className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
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
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a chip"
          className="taskforminput h-10"
        />
        <button
          type="button"
          onClick={handleAddChip}
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Chip
        </button>
      </div>
    </div>
  );
};

export default ChipInputField;
