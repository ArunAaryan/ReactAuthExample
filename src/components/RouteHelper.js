import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import AuthContext from "../AuthContext";
import PrivateRoute from "./PrivateRoute";
const { getUser } = require("../AuthHelper");
function RouteHelper() {
  const [userData, setUserData] = useState(null);
  useEffect(async () => {
    let data = await getUser();
    // await setTimeout(() => setUserData(data), 3000);
    // console.log("userdata", data);

    setUserData(data);
  }, []);
  return (
    <AuthContext.Provider value={userData}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default RouteHelper;
