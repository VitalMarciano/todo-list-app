
import Dashboard from "./pages/dashboard";
import Store from "./store";
import SignUp from "./pages/signup";
import SearchResults from "./pages/searchResults"

export const pages = {
    home: <Store />,
    desh: <Dashboard />,
    signup: <SignUp />,
    searchResults : <SearchResults/>,

}