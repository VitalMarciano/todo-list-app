import React, { useState } from "react";
import Sidebar from "./sidebar.jsx";



function LayoutM({ children }) {
  const [collapsed, setSidebarCollapsed] = useState(false);
  return (
    <>
      <div className="flex flex-row  relative flex-min-h-screen ">
 
        <Sidebar ></Sidebar>
        <div className="flex flex-1 flex-col bg-slate-100 ">
          {children}
          <footer className="bg-slate-100 text-center dark:bg-neutral-700 lg:text-left">
            <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
              © 2023 Copyright:
              <a
                className="text-neutral-800 dark:text-neutral-400"
              >
                Todo app
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default LayoutM;
