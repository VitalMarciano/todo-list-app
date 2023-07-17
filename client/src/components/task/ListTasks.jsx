import React, { useEffect, useState, useContext } from "react";
import Section from "./Section";
import Context from "../../utils/context";
import { fetchTasks } from "../../utils/lib";

const ListTasks = () => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);
  const { state, dispatch } = React.useContext(Context);

  const handleFetchTasks = async () => {
    await fetchTasks(state.user, dispatch);
  };
  useEffect(() => {
    handleFetchTasks();
  }, []);

  useEffect(() => {
    const allTasks =
      state.ftasks.length > 0 ? [...state.ftasks] : [...state.tasks] || [];
    const fTodos = allTasks.filter((task) => task.status === "todo");
    const fInProgress = allTasks.filter((task) => task.status === "inprogress");
    const fClosed = allTasks.filter((task) => task.status === "closed");
    setTodos(fTodos);
    setInProgress(fInProgress);
    setClosed(fClosed);
    dispatch({ type: "SET_TODO", param: fTodos.length });
    dispatch({ type: "SET_INPROGRESS", param: fInProgress.length });
    dispatch({ type: "SET_CLOSED", param: fClosed.length });
  }, [state.tasks, state.ftasks]);

  const statuses = ["todo", "inprogress", "closed"];

  return (
    <div >
    <div className=" justify-items-center mb-12">
    <h1 className=" font-bold text-lg dark:text-slate-200">
      {todos.length + inProgress.length + closed.length} tasks
    </h1>
  </div>
    <div className="flex gap-16  z-0 grow mx-2 max-sm:flex-col ">
     
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
        />
      ))}
    </div>
    </div>
  );
};

export default ListTasks;
