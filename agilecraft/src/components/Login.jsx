// Login.jsx
import React from "react";
import "./Login.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Panel */}
      <div className="left-panel">
        {/* Add your vector image and other content for the left panel */}
        <img src="path/to/vector-image.jpg" alt="Vector" />
        <p>Left Panel Content</p>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="right-panel-content">
          <img src="path/to/logo.png" alt="Logo" className="logo" />
          <h1>AGILE CRAFT</h1>
          <h2>Welcome to AgileCraft!! 🌟</h2>

          {/* Login Form */}
          <form>
            <label>Email:</label>
            <input type="text" placeholder="Enter your email" />

            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />

            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <aside>Forgot password?</aside>
            </div>

            <button type="submit">Log In</button>

            <div className="create-account">
              <p>Don't have an account?</p>
              <Link to="/signUp">Create an account</Link>
            </div>
          </form>

          {/* Social Links */}
          <div className="social-links">
            {/* Add your social media icons or links here */}
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
