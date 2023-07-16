import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import Context from "../utils/context";
import checkedIcon from "../assets/checked.svg";
import CreateTask from "./CreateTask";
export default function Sidebar() {
  
  const [cookies, setCookies] = useCookies(["access_token"]);
  const { state, dispatch } = React.useContext(Context);
  const [showSidebar, setShowSidebar] = useState(state.desktop);
  const logout = () => {
    setCookies("access_token", "");

    dispatch({ type: "EXIT", param: null });
  };
  const handleNavigate = (route) => {
    dispatch({ type: "SET_VIEW", param: route });
    dispatch({ type: "SET_FTASKS", param: [] });

  };
  return (
    <>
      {showSidebar ? (
        <></>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-3"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10" rx="7" ry="7"></rect>
          <rect y="30" width="100" height="10" rx="7" ry="7"></rect>
          <rect y="60" width="100" height="10" rx="7" ry="7"></rect>
        </svg>
      )}

      <div
        className={`flex  left-0 fixed h-full z-20 duration-200 ease-in-out  ${
          showSidebar ? "translate-x-0" : "-translate-x-full overflow-hidden"
        }`}
      >
        <button
          className="flex right-2 text-4xl items-center cursor-pointer fixed top-2 z-50 dark:text-white"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
        <div className="flex flex-col h-screen p-6 bg-slate-200 shadow w-60 dark:bg-slate-800">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold dark:text-white">To-Do-App</h2>
              <button
                onClick={()=> handleNavigate("home")}
              >
                <img
                  src={checkedIcon}
                  alt="Checked Icon"
                  className="icon h-6 w-auto pl-1"
                />
              </button>
              
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-3 text-md">
              <li className="rounded-sm my-7">
                <CreateTask text={"Add Task"}></CreateTask>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="sidebarlbl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>

                    <button
                     onClick={()=> handleNavigate("home")}
                        
                    >
                      Home
                    </button>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a href="#" className="sidebarlbl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <span>Inbox</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a href="#" className="sidebarlbl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Settings</span>
                  </a>
                </li>

                <li className="rounded-sm fixed bottom-10">
                  
                  <a href="#" className="sidebarlbl">
                  <button className="inline-flex gap-3 " onClick={logout}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
