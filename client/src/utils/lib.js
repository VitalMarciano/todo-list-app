
export const fetchTasks = async (username, dispatch) => {

  try {
    const response = await fetch(`https://todo-app-api-6dof.onrender.com/tasks/${username}`);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const data = await response.json();
    dispatch({ type: "SET_TASKS", param: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = (editedTask, state, dispatch) => {
  const prevTasks = [...state.tasks];
  const prevfTasks = [...state.ftasks];
  console.log(state.ftasks);

  const updatedTasks = prevTasks.map((t) =>
    t._id === editedTask._id ? editedTask : t
  );
  const updatedfTasks = prevfTasks.map((t) =>
    t._id === editedTask._id ? editedTask : t
  );
  fetch(`https://todo-app-api-6dof.onrender.com/tasks`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: editedTask._id,
      username: editedTask.username,
      name: editedTask.name,
      content: editedTask.content,
      tags: editedTask.tags,
      dueDate: editedTask.dueDate,
      priority: editedTask.priority,
      subTasks: editedTask.subTasks,
      assignees: editedTask.assignees,
      status: editedTask.status,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Task not found");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Optional: Log the response from the server
      if (state.ftasks.length > 0) {
       // dispatch({ type: "SET_TASKS", param: updatedTasks });
        dispatch({ type: "SET_FTASKS", param: updatedfTasks });
        console.log(state.ftasks);
      } else {
        fetchTasks(state.user, dispatch);
      }

      console.log(state.tasks);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const saveTask = async (task, state, dispatch) => {
  try {
    const response = await fetch("https://todo-app-api-6dof.onrender.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: state.user,
        name: task.name,
        content: task.content,
        tags: task.tags,
        dueDate: task.dueDate,
        priority: task.priority,
        subTasks: [],
        assignees: task.assignees,
        status: task.status,
      }),
    });

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    await fetchTasks(state.user, dispatch);
    toast.success("Task Created");
    setShowModal(false); // Hide the modal after submitting
    
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
  }
    
};


export default updateTask;