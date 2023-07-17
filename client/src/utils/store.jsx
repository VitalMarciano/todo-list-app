import React from "react";

import Dashboard from "../components/pages/dashboard";
import Context from "./context";
import Login from "../components/pages/Login";

const Store = () => {
  const { state, dispatch } = React.useContext(Context)
  return <>{state.user ? <Dashboard /> : <Login />}</>;
};

export default Store;
