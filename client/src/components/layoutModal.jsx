import React, { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar/navbar";
import { useContext } from "react";
import Context from "../utils/context";

function LayoutM({ children }) {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const { state, dispatch } = React.useContext(Context);
  return (
    <>
    <div className={`layoutM ${state.darkMode ? "dark" : ""}`}>
      <div className="flex flex-row relative flex-min-h-screen ">
      {state.user ? (
   
        <Sidebar></Sidebar>):
        (<></>)
        }
        <div className="flex flex-1 flex-col bg-slate-100 dark:bg-slate-900 ">
          <Navbar></Navbar>
          {children}
          <footer className="bg-slate-100 text-center dark:bg-slate-800 lg:text-left">
            <div className="p-4 text-center text-slate-700 dark:text-slate-200">
              © 2023 Copyright:
              <a
                className="text-slate-800 dark:text-slate-400"
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
