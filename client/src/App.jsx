import Navbar from "./components/navbar";
import React, { useReducer } from "react";
import Context from "./utils/context";
import { initState, reducer } from "./utils/reducer";
import { pages } from "./components/pages";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toaster } from "react-hot-toast";

export function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>
        <Toaster />
        <Context.Provider value={{ state, dispatch }}>
          <Navbar />
          {pages[state.view]}
        </Context.Provider>
      </DndProvider>
    </BrowserRouter>
  );
}

export default App;
