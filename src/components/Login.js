import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
const {
  login,
  getUser,
  setAuthenticated,
  checkAuthenticated,
} = require("../AuthHelper");
function Login(props) {
  // const [loading, setLoading] = erue;
  console.log("I am login");
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://60091f550a54690017fc2bcf.mockapi.io/login")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        localStorage.setItem("access_token", json.access_token);
        setAuthenticated(true);
        if (checkAuthenticated()) {
          console.log("checkauthenticated", checkAuthenticated());
          props.history.push("/home");
        }
      });
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
