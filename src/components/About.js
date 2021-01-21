import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../AuthContext";
function About() {
  const userData = useContext(AuthContext);
  if (!userData) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <h1>Hello {userData.userName} this is About</h1>
      </div>
    );
  }
}

export default About;
