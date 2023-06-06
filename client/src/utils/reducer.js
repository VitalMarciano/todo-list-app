export const initState = {
  view: "auth", // signin, home
  user: null,
  tasks:  JSON.parse(localStorage.getItem("tasks")) || null,
  error: "",
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_VIEW":
      return {
        ...state,
        view: action.param,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.param,
      };
    case "SET_TASKS":
        localStorage.setItem("tasks", JSON.stringify(action.param));
      return {
        ...state,
        tasks: action.param,
      };
    case "EXIT":
        localStorage.removeItem("tasks");
      return {
        ...state,
        user: null,
        tasks: null, // Update to empty array
        view: "login",
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.param,
      };
    default:
      return state;
  }
};
