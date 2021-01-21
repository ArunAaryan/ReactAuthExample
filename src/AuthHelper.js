import { createContext } from "react";
import React, { Component } from "react";
const login = () => {
  fetch("https://60091f550a54690017fc2bcf.mockapi.io/login")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      localStorage.setItem("access_token", json.access_token);
    });
};

const logout = () => {
  localStorage.removeItem("access_token");
};

const getUser = async () => {
  let data;
  data = await fetch("https://60091f550a54690017fc2bcf.mockapi.io/getuser");
  data = await data.json();
  //   console.log("getuser", data);
  return data;
};

export { login, logout, getUser };
