import React, { useContext } from "react";
const { login, getUser } = require("../AuthHelper");
const { AuthContext } = require("../AuthContext");
function Login() {
  const handleSubmit = () => {
    login();
  };
  return (
    <div>
      <h1>This is login page.</h1>
      <button className="button" onClick={handleSubmit}>
        login
      </button>
    </div>
  );
}

export default Login;
