import React, { useState } from "react";
import Sidebar from "./sidebar.jsx";
import Navbar from "./navbar.jsx";
import { useContext } from "react";
import Context from "../utils/context";

function LayoutM({ children }) {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const { state, dispatch } = useContext(Context);
  return (
    <>
    <div className={`layoutM ${state.darkMode ? "dark" : ""}`}>
      <div className="flex flex-row relative flex-min-h-screen ">
      {state.username ? (
   
        <Sidebar></Sidebar>):
        <></>}
        <div className="flex flex-1 flex-col bg-slate-100 dark:bg-neutral-700 ">
          <Navbar></Navbar>
          {children}
          <footer className="bg-slate-100 text-center dark:bg-neutral-700 lg:text-left">
            <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
              © 2023 Copyright:
              <a
                className="text-neutral-800 dark:text-neutral-200"
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Todo app
              </a>
            </div>
          </footer>
        </div>
      </div>
      </div>
    </>
  );
}

export default LayoutM;
