import React, { useEffect, useState, useContext } from "react";
import Section from "./Section";
import Context from "../utils/context";
import { fetchTasks } from "../utils/lib";

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
    const allTasks = [...state.tasks] || [];
    const fTodos = allTasks.filter((task) => task.status === "todo");
    const fInProgress = allTasks.filter((task) => task.status === "inprogress");
    const fClosed = allTasks.filter((task) => task.status === "closed");
    setTodos(fTodos);
    setInProgress(fInProgress);
    setClosed(fClosed);
  }, [state.tasks]);

  const statuses = ["todo", "inprogress", "closed"];

  return (
    <div className="flex gap-16">
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
  );
};

export default ListTasks;
