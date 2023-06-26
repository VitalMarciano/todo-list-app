
export const fetchTasks = async (username, dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();

      dispatch({ type: "SET_TASKS", param: data });
      
       
    } catch (err) {
      console.log(err);
    }
  };

  export const createTask = async (taskData) => {
    try {
      const { state, dispatch } = React.useContext(Context);
  
      const response = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });
  
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
  
      toast.success("Task Created");
      await fetchTasks(state.user, dispatch); // Fetch tasks again to update UI
    } catch (error) {
      console.error(error);
      toast.error("Failed to create task");
      throw error; // Propagate the error to the caller
    }
  };


