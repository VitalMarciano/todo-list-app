import React, { useState, useContext } from "react";
import axios from "axios";
import Context from "../../utils/context";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [showModal, setShowModal] = useState(false); // Initially hide the modal
  const { state, dispatch } = React.useContext(Context);

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
      email,
      birthday,
    };

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
        name,
        lastName,
        email,
        birthday,
      });
      if (response.data["message"] == "User already exists!") {
        alert(response.data["message"]);
      } else {
        dispatch({ type: "SET_VIEW", param: "home" });
        alert("Registration completed! Now login.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onCancel = () => {
    dispatch({ type: "SET_VIEW", param: "home" });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen mb-10">
      <div className="formbg">
        <h1 className="pt-5 formtitle">Sign up</h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label className="formlbl" htmlFor="email">
              Username:
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
            <label className="formlbl" htmlFor="password">
              Password:
            </label>
            <input
              className="forminput"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="formlbl" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className="forminput"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          <div className="mb-2">
            <label className="formlbl" htmlFor="name">
              Name:
            </label>
            <input
              className="forminput"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="formlbl" htmlFor="lastName">
              Last Name:
            </label>
            <input
              className="forminput"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="formlbl" htmlFor="email">
              Email:
            </label>
            <input
              className="forminput"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="formlbl" htmlFor="birthday">
              Birthday:
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40  dark:bg-slate-800 dark:text-gray-200"
              type="date"
              placeholder="Birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <button
            className="submitbtn"
            //onClick={handleSignUp}
            type="submit"
          >
            Sign Up
          </button>

          <button
            className="font-medium text-purple-600 hover:underline w-full mt-2 pb-2 font-semibold font-light text-center text-gray-700 dark:text-gray-400"
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
