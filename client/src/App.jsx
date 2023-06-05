import Navbar from "./components/navbar";
import React, { useReducer } from "react";
import Context from "./utils/context";
import { initState, reducer } from "./utils/reducer";
import { pages } from "./components/pages";
import { BrowserRouter } from "react-router-dom";

export function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <BrowserRouter>
      <Context.Provider value={{ state, dispatch }}>
        <Navbar />
        {pages[state.view]}
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
