import Auth from "../pages/auth";
import Home from "../pages/home";
import Dashboard from "./Dashboard";
import Login from "./login";
import SignUp from "./signup";


export const pages = {
    home: <Dashboard />,
    login: <Login />,
    signup: <SignUp />,
    auth: <Auth/>,

}