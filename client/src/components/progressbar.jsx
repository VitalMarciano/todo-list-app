import Context from "../utils/context";
import React, { useEffect, useState } from "react";
const ProgressBar = ({text}) => {
  const { state, dispatch } = React.useContext(Context);
  const [todos, setTodos] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [closed, setClosed] = useState(0);
  
  useEffect(() => {
    const total=state.tasks.length;
    setTodos((state.todoCount/total)*100);
    setInProgress((state.inProgressCount/total)*100);
    setClosed((state.closedCount/total)*100);
  }, [state.todoCount,state.inProgressCount,state.closedCount]);
  
  return (
    <div className="relative pt-1 mx-1">
      <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
        {text}
      </div>

      <div className="overflow-hidden  h-4 rounded-full mb-4 text-xs flex w-full bg-gray-400 dark:bg-gray-700">
        <div
          style={{ width: `${todos}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 dark:bg-blue-700"
        ></div>
        <div
          style={{ width: `${inProgress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500 dark:bg-purple-700"
        ></div>
        <div
          style={{ width: `${closed}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 dark:bg-green-700"
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
