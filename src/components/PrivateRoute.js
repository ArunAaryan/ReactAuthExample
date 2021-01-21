import { Route, Redirect } from "react-router-dom";
import React, { Component, useState, useEffect } from "react";
import AuthContext from "../AuthContext";
const { checkAuthenticated } = require("../AuthHelper");
const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("login called me");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (checkAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
