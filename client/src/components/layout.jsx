import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./idebar";
import Login from "./Login";

const Layout = ({ user}) => {
  return (
    <>
      <div className="bg-slate-100 w-screen h-screen flex items-center p-3 gap-16 pt-32 overflow-auto">
        {user ? (
          <>

            <Dashboard />
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
};

export default Layout;
