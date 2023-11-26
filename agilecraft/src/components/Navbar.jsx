// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"; // Adjust the path based on your actual file structure
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" height="70px" />
      </div>
      <h1 className="logo-text">Agile Craft</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="button-container">
        <Link to="/login">
          <button className="login-button">LogIn</button>
        </Link>
        <Link to="/register">
          <button className="signup-button">SignUp</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
