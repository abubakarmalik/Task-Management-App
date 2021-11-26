/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../connection/connect";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  useEffect(() => {
    localStorage.setItem("checkAuth", false);
  }, []);

  const loginUser = (e) => {
    e.preventDefault();

    api.post("/", user).then((res) => {
      if (user.email && user.password) {
        alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/home");

        localStorage.setItem("checkAuth", true);
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <>
      <section className="cardsec">
        <div className="login-inner gap-0">
          <div className="logincard">
            <div className="cardbody">
              <h1>Kindly login to continue Task App</h1>
              <form id="loginForm" className="mt-2">
                <p className="text-scarlet"></p>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    EMAIL ADDRES
                  </label>
                  <input
                    className="form-control shadow-none"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <i className="fa fa-check"></i>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    PASSWORD
                  </label>
                  <input
                    className="form-control shadow-none"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="*******"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <i className="fa fa-check"></i>
                </div>

                <div className="actionbtns d-grid">
                  <button
                    className="btn btn-primary shadow-none"
                    type="submit"
                    onClick={loginUser}
                  >
                    Sign In
                  </button>
                  <p className="ortext">
                    <span>Don’t have an account? </span>
                    <Link to="/register">Sign up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
