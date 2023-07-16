export const initState = {
  view: "home",
  user: null,
  tasks: [],
  ftasks: [],
  error: "",
  darkMode: false, // Add the darkMode state
<<<<<<< Updated upstream
  todoCount: 0,
  inProgressCount: 0,
  closedCount: 0,
=======
  desktop: (window.innerWidth>640) ? (true):(false),
>>>>>>> Stashed changes
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
        tasks: [],
        ftasks: [],
        view: "home",
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
    case "SET_FTASKS":
      return {
        ...state,
        ftasks: action.param,
      };
    case "SET_TODO":
      return {
        ...state,
        todoCount: action.param,
      };
      case "SET_INPROGRESS":
      return {
        ...state,
        inProgressCount: action.param,
      };
      case "SET_CLOSED":
      return {
        ...state,
        closedCount: action.param,
      };

    default:
      return state;
  }
};
