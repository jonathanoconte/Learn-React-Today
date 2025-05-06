// Day 12: Context for Global State
// Tasks:
// Store login state in context
// Toggle login/logout view
// Mini Project: Login/logout state handler

// Context:
// 1. Create Context
// 2. Context Provider
// 3. Use the useContext Hook

import React, { useState, createContext, useContext } from "react";

const LoginContext = createContext(); //Create Context

function LoginProvider({ children }) {
  //Context Provider using children
  const [isLogin, setIsLogin] = useState(true);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

function LoginSwitcher() {
  //component using Context
  const { isLogin, setIsLogin } = useContext(LoginContext); //Use the useContext Hook

  return (
    <>
      <h3>
        User status: <strong>{isLogin ? "Online" : "Offline"}</strong>
      </h3>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded-lg"
        onClick={() => setIsLogin(isLogin === true ? false : true)}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </>
  );
}

function Day12() {
  return (
    <>
      <LoginProvider>
        <LoginSwitcher />
      </LoginProvider>
    </>
  );
}

export default Day12;
