import React, { useState } from "react";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
function App() {
  const [isLogin, setIsLogin] = useState(true);

  // Add code to toggle between Login and Signup
  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="login-signup-container">
          {isLogin ? <Login /> : <Signup />}
        </div>
        <div className="mt-2">
          <button onClick={togglePage} className="btn btn-info">
            {isLogin ? "Go to Signup" : "Go to Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
