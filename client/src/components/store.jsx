import React from "react";

import Dashboard from "./pages/dashboard";
import Context from "../utils/context";
import Login from "./pages/Login";

const Store = () => {
  const { state, dispatch } = React.useContext(Context)
  return <>{state.user ? <Dashboard /> : <Login />}</>;
};

export default Store;
