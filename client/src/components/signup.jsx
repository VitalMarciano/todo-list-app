import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [showModal, setShowModal] = useState(false); // Initially hide the modal

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    const user = {
      username,
      password,
      name,
      lastName,
      birthday,
    };
   
    try {
      const response=await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      if(response.data['message']=="User already exists!"){
        alert(response.data['message']);
      }
      else{
        navigate("/login")
        alert("Registration completed! Now login.");
      }
    
    } catch (error) {
      console.error(error);
    }
  };
  const onCancel= ()=>{
    navigate("/login")
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen mb-10">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-600/40 ring ring-2 ring-cyan-600 lg:max-w-xl">
        <h1 className="pt-5 text-3xl font-semibold text-center text-cyan-700 uppercase">
          Sign up
        </h1>
        <form className="mt-6" onSubmit={onSubmit}> 
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password:</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="birthday">Birthday:</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="date"
              placeholder="Birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-700 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600"
            //onClick={handleSignUp}
            type="submit"
          >
            Sign Up
          </button>

          <button
            className="w-full mt-2 pb-2 text-xs font-light text-center text-gray-700"
            onClick={onCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
