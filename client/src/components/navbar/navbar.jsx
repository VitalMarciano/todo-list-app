import React, { useContext } from "react";
import Context from "../../utils/context";
import SearchBar from "./searchBar";

const Navbar = () => {
  const { state, dispatch } = React.useContext(Context);
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`navbar ${state.darkMode ? "dark" : ""}`}>
      <div
        className={`navbar justify-center flex-row inline-flex items-baseline h-14 gap-10 w-full z-10 top-0 left-0 `}
      >
         
            <div className=" justify-center text-lg font-bold text-gray-800 dark:text-white">
              {currentDate}
            </div>
          
          <div className=" justify-self-end items-center mt-2 space-x-2 pr-20  cursor-pointer">
            {state.user ? <SearchBar small /> : <></>}
          </div>
      
        </div>
      </div>

  );
};

export default Navbar;
