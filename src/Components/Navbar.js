import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./components.css";

const Navbar = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        {/* <div className="ms-4">
          <Link to="/">Home</Link>
        </div>
        <div className="ms-4">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="ms-4">
          <Link to="/signup">Sign Up</Link>
        </div> */}

        {/* Navlinks */}
        <div className="ms-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-active" : "nav-inActive")}
          >
            Home
          </NavLink>
        </div>
        <div className="ms-4">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-active" : "nav-inActive")}
          >
            Contact
          </NavLink>
        </div>
        <div className="ms-4">
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "nav-active" : "nav-inActive")}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
