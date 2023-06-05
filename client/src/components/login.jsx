import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Context from "../utils/context"




const Login = ({ onLogin }) => {
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
         
          dispatch({ type: 'SET_VIEW', param: 'home' });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            type="submit"
            //onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?{" "}
          <a
            href="#"
            onClick={onSignUp}
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
