import React, { useState, useContext } from "react";
import Context from "../../utils/context";
import SearchBar from "./searchBar";
import SearchPopUp from "./searchPopup";
const Navbar = () => {
  const { state, dispatch } = React.useContext(Context);
  const [showSearch, setShowSearch] = useState(state.desktop);
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`navbar ${state.darkMode ? "dark" : ""}`}>
      <div
        className={`navbar justify-center flex-row inline-flex items-baseline h-14 gap-10 w-full z-10 top-2 mt-5 max-sm:flex-1 max-sm:h-7`}
      >
        <div className="flex justify-center text-lg font-bold text-gray-800 dark:text-white max-sm:text-md">
          {currentDate}
        </div>

        {state.user ? (
          showSearch ? (
            <div className="justify-self-end items-center mt-2 space-x-2 pr-20 cursor-pointer">
              <SearchBar small />
            </div>
          ) : (
            <SearchPopUp></SearchPopUp>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
