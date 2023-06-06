export const initState = {
  view: "auth", // signin, home
  user: null,
  tasks: [],
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
      return {
        ...state,
        tasks: action.param,
      };
    case "EXIT":
      return {
        ...state,
        user: null,
        tasks: [], // Update to empty array
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
