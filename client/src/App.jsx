
import React, { useReducer } from "react";
import Context from "./utils/context";
import { initState, reducer } from "./utils/reducer";
import { pages } from "./utils/pages";
import { BrowserRouter } from "react-router-dom";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { Toaster } from "react-hot-toast";
import LayoutM from "./utils/layoutModal";

export function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>
        <Toaster />
        <Context.Provider value={{ state, dispatch }}>
          <LayoutM>{pages[state.view]}</LayoutM>
        </Context.Provider>
      </DndProvider>
    </BrowserRouter>
  );
}

export default App;
