import React, { useEffect, useState } from "react";
import Home from "./Home";
import Test from "./test";

const Auth = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const getstate = () => {
      let state = localStorage.getItem("checkAuth");
      return state;
    };
    setAuth(getstate);
  }, []);

  if (auth === "true") {
    return <Home />;
  }
  return <Test />;
};

export default Auth;
