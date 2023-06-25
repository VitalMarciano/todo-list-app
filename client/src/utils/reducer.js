export const initState = {
  view: "login",
  user: null,
  tasks: null,
  ftasks:null,
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
      return {
        ...state,
        tasks: action.param,
      };
    case "EXIT":
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
    case "SET_SEARCH_RESULTS":
      return{
        ...state,
        ftasks: action.param,
        view: "searchResults",
      }
    default:
      return state;
  }
};
