import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Context from "../../utils/context"




const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const { state, dispatch } = React.useContext(Context)



  const onSignUp= () =>{
    
    dispatch({ type: 'SET_VIEW', param: 'signup' });
  }

  
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      console.log(response.data['message']);
      switch (response.data['message']) {
        case "User Doesn't Exists!":
        case "Username or Password is incorrect!":
          alert(response.data['message']);
          break;
        default:
          setCookies("access_token", response.data.token);
          window.localStorage.setItem("userID", response.data.userID);
          //window.location.pathname="/";
          dispatch({ type: 'SET_USER', param: username });
          console.log("user");
          console.log(state.user);
          dispatch({ type: 'SET_VIEW', param: 'home' });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden dark:bg-gray-900">
      <div className="formbg">
        <h1 className="formtitle">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-300"
            >
              
            </label>
            <input
              className="forminput"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
               className="forminput"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="submitbtn"
            type="submit"
            //onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700 dark:text-gray-50">
          Don't have an account?{" "}
          <a
            href="#"
            onClick={onSignUp}
            className="font-medium text-purple-600 hover:underline dark:text-gray-400"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
