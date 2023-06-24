export const initState = {
  view: "login",
  user: null,
  tasks: null,
  error: "",
  darkMode: false, // Add the darkMode state
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
        tasks: null,
        view: "login",
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.param,
      };
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};
