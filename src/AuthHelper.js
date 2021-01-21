import { createContext } from "react";
import React, { Component } from "react";
let isAuthenticated = false;
const setAuthenticated = () => {
  if (isToken()) {
    isAuthenticated = true;
  }
};
const checkAuthenticated = () => {
  setAuthenticated();
  return isAuthenticated;
};
const logout = () => {
  localStorage.removeItem("access_token");
  isAuthenticated = false;
};

const getUser = async () => {
  let data;
  data = await fetch("https://60091f550a54690017fc2bcf.mockapi.io/getuser");
  data = await data.json();
  //   console.log("getuser", data);
  return data;
};

const isToken = () => {
  let token = localStorage.getItem("access_token");
  return token;
};

export { logout, getUser, isToken, setAuthenticated, checkAuthenticated };
