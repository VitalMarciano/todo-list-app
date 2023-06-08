import React, { useEffect, useState } from "react";
import Section from "./section";
import Context from "../utils/context";
import axios from "axios";

const ListTasks = () => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);
  const { state, dispatch } = React.useContext(Context);
  const username=state.user;

  useEffect(() => {


    const fetchTasks = async () => {
      try {
        console.log(username);
        const response = await axios.get(
          `http://localhost:3001/tasks/${username}`
        );
        console.log(response.data);
        dispatch({ type: "SET_TASKS", param: response.data });
      } catch (err) {
        console.log(err);
      }
    };
    fetchTasks();
    
  }, []);

  useEffect(() => {
   
    const allTasks = state.tasks || [];
    console.log(allTasks);
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
