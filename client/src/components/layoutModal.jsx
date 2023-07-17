import React, { useState } from "react";
import Sidebar from "./sidebar";
import ProfileSidebar from "./profileSidebar";
import Navbarr from "./navbar/navbar";
import { useContext } from "react";
import Context from "../utils/context";
import checkedIcon from "../assets/checked.svg";

function LayoutM({ children }) {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const { state, dispatch } = React.useContext(Context);

  return (
    <>
    <div className={`layoutM ${state.darkMode ? "dark" : ""}`}>
      <div className="flex flex-row relative min-h-screen w-screen ">
      {state.user ? (
   
   <div className="flex"><Sidebar ></Sidebar><ProfileSidebar ></ProfileSidebar></div>)
        :
        (<></>)
        }
        <div className="flex flex-1 flex-col bg-slate-100 dark:bg-slate-900 ">
          <Navbarr></Navbarr>
          {children}
          <footer className="justify-center bg-slate-100 text-center dark:bg-slate-800 lg:text-left">
            <div className="p-4 text-center flex justify-center text-slate-700 dark:text-slate-200">
              © 2023 Copyright: 
              <a
                className="text-slate-800 dark:text-slate-400"
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Todo app
              </a>
              <img src={checkedIcon} alt="Checked Icon" className="icon h-6 w-auto" />
            </div>
          </footer>
        </div>
      </div>
      </div>
    </>
  );
}

export default LayoutM;
