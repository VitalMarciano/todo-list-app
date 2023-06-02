import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/home";
import  Auth  from "./pages/auth";
import  Navbar  from "./components/navbar";
import SignUp from "./components/signup";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
