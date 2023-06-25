
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




