
import Dashboard from "../components/pages/dashboard";
import Store from "./store";
import SignUp from "../components/pages/signup";
import SearchResults from "../components/pages/searchResults"

export const pages = {
    home: <Store />,
    desh: <Dashboard />,
    signup: <SignUp />,
    searchResults : <SearchResults/>,

}