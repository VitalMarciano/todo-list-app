

export const fetchTasks = async (username, dispatch) => {
  let email;
  try {
    const response1 = await fetch(`http://localhost:3001/auth/${username}`);
    if (!response1.ok) {
      throw new Error("Failed to find user");
    }
    const data = await response1.json();
    email=data;
  } catch (err) {
    console.log(err);
  }
  try {
    const response = await fetch(`http://localhost:3001/tasks/${username,email}`);
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
  fetch(`http://localhost:3001/tasks`, {
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

export default updateTask;
