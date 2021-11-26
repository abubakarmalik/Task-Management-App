import React from "react";
import { Link } from "react-router-dom";
import logo from '../assests/logo.png'

const Navbar = () => {
  return (
    <div className="row">
      <div className="col-12" style={{ background: "#e3f2fd", height:"70px" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-lighttop container">
          <div className="nav-item">
            <Link to="/home"> <img src={logo} alt="Wajbat Logo" width="40" /> Task App</Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addtask">
                  Add Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/staticties">
                  Staticties
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
