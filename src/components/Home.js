import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../AuthContext";
function Home() {
  const userData = useContext(AuthContext);
  console.log("reloading once");
  if (!userData) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <h1>Hello {userData.userName} this is home</h1>
      </div>
    );
  }
}

export default Home;
