import React, { useContext, useState } from "react";
import Context from "../utils/context";
import checkedIcon from "../assets/biggie.png";
import ProgressBar from "./progressbar";
import Darkmode from "./toggleDarkmode"
 
export default function Sidebarr() {
  


  const { state, dispatch } = React.useContext(Context);
  const [showSidebar, setShowSidebar] = useState(state.desktop);

  return (
    <>
      {showSidebar ? (
        <></>
      ) : (
        <img
        src={checkedIcon} onClick={() => setShowSidebar(!showSidebar)}
        alt="Checked Icon"
        className=" fixed icon h-10 w-auto pr-1 top-5 right-5 mr-5"
      />
      )}
      <div
        className={`flex right-2 fixed h-full z-0 duration-200 ease-in-oute w-72 flex-col ${
          showSidebar ? "-translate-x-0" : " translate-x-full  overflow-hidden"
        }`}
      >
        <button
          className="flex right-2 text-4xl items-center cursor-pointer fixed top-2 z-50 dark:text-white"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
        <div className="flex flex-col h-screen p-6 bg-slate-200 shadow dark:bg-slate-800">
          <div className="space-y-3">
            <div className="flex items-center">
              <img
                src={checkedIcon}
                alt="Checked Icon"
                className="icon h-10 w-auto pl-1 border-2"
              />
              <h2 className="text-xl font-bold dark:text-white">
                 Hi, {state.user}!
              </h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-3 text-md dark:text-white">
                 <li><ProgressBar text={"Task status"}></ProgressBar></li> 
                 <li> <Darkmode></Darkmode></li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
