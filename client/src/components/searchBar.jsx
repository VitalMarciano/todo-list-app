import React, { useState } from "react";
import Context from "../utils/context";

const SearchBar = () => {
  const { state, dispatch } = React.useContext(Context);

  const [selectedCategory, setSelectedCategory] = useState("tags");
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Perform the search based on the selected category and search query
    const searchResults = state.tasks.filter((task) => {
      let searchField;

      // Check the selected category and assign the corresponding field of the task
      if (selectedCategory === "tags") {
        searchField = task.tags.map((tag) => tag.toLowerCase());
      } else if (selectedCategory === "users") {
        searchField = task.assignees.map((assignee) => assignee.toLowerCase());
      } else if (selectedCategory === "tasks") {
        searchField = task.name.toLowerCase();
      } else if (selectedCategory === "projects") {
        searchField = task.content.toLowerCase();
      }

      // Perform the search based on the search query and the selected field
      if (Array.isArray(searchField)) {
        return searchField.some((field) =>
          field.includes(searchQuery.toLowerCase())
        );
      } else {
        return searchField.includes(searchQuery.toLowerCase());
      }
    });

    // Dispatch the search results to the context or update the UI accordingly
    dispatch({ type: "SET_SEARCH_RESULTS", param: searchResults });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <form>
        <div className="flex">
          <div className="relative">
            <button
              id="dropdown-button"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
              onClick={toggleDropdown}
            >
              {selectedCategory === "tags" && "Tags"}
              {selectedCategory === "users" && "Users"}
              {selectedCategory === "tasks" && "Tasks"}
              {selectedCategory === "projects" && "Projects"}
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 z-20 mt-2 w-56 text-gray-700 bg-white rounded-md shadow-lg dark:bg-gray-800">
                <div className="py-1">
                  <button
                    className={`text-gray-700 dark:text-gray-200 block w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
                    onClick={() => handleCategorySelect("tags")}
                  >
                    Tags
                  </button>
                  <button
                    className={`text-gray-700 dark:text-gray-200 block w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
                    onClick={() => handleCategorySelect("users")}
                  >
                    Users
                  </button>
                  <button
                    className={`text-gray-700 dark:text-gray-200 block w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
                    onClick={() => handleCategorySelect("tasks")}
                  >
                    Tasks
                  </button>
                  <button
                    className={`text-gray-700 dark:text-gray-200 block w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
                    onClick={() => handleCategorySelect("projects")}
                  >
                    Projects
                  </button>
                </div>
              </div>
            )}
          </div>

          <input
            className="flex-1 w-full px-4 py-2 text-sm border border-gray-300 rounded-r-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-gray-700"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />

          <button
            className="flex-shrink-0 px-4 py-2 ml-4 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
