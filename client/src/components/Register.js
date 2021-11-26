import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../connection/connect";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const addUser = (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      api.post("/register", user).then((res) => {
        alert(res.data.message);
        navigate("/");
        console.log(res);
      });
    } else {
      alert("invalid input");
    }
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
                    Username
                  </label>
                  <input
                    className="form-control shadow-none"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter username"
                    value={user.name}
                    onChange={handleChange}
                  />
                  <i className="fa fa-check"></i>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    EMAIL ADDRES
                  </label>
                  <input
                    className="form-control shadow-none"
                    id="email"
                    type="text"
                    placeholder="Enter Email"
                    name="email"
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
                    onClick={addUser}
                  >
                    Sign In
                  </button>
                  <p className="ortext">
                    <span>Already have an account? </span>{" "}
                    <Link to="/">Log in</Link>
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

export default Register;
