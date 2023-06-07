import React,{ useEffect, useState } from "react";
import Section from "./section";
import Context from "../utils/context";
const ListTasks = () => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);
  const { state, dispatch } = React.useContext(Context)

  useEffect(() => {
    const fTodos = (state.tasks).filter((task) => task.status === "todo");
    const fInProgress = (state.tasks).filter((task) => task.status === "inprogress");
    const fClosed = (state.tasks).filter((task) => task.status === "closed");

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
