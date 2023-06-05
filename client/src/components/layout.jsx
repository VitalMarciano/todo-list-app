import React from "react";
import Dashboard from "./Dashboard";

const Layout = ({ user,  toggleSignUp, handleLogin }) => {
  return (
    <div className="bg-slate-100 w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32 overflow-auto ">
      {user ? (
        <Dashboard/>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Layout;
