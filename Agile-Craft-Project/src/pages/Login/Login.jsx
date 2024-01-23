// Login.jsx
import { useState } from "react";
import "./Login.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import vectorLogin from "./vectorLogin.png"; // Adjust the path based on your actual file structure
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/dropdownRole/Dropdown";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setData(data.message);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message.slice(20, 25));
    }
  };

  return (
    <>
      <div className="login-container">
        {/* Left Panel */}
        <div className="left-panel">
          {/* Add your vector image and other content for the left panel */}
          <img src={vectorLogin} alt="" />
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="right-panel-content">
            <img src="" alt="logo" className="logo" />
            <h1>AGILE CRAFT</h1>
            <h3>Welcome to AgileCraft!! 🌟</h3>
            <p>
              Please sign-in to your account and start the <br />
              journey
            </p>
            <p>{data}</p>
            {error && (
              <p className="error-message">
                {error === "401"
                  ? "Password not match. Try again"
                  : "User or email not exist. Try again"}
              </p>
            )}
            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="remember-forgot">
                <div className="remember-me">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
                <aside>Forgot password?</aside>
              </div>
              {/* Role Dropdown */}
              <Dropdown
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <button type="submit">
                Log In {selectedRole === "admin" ? "(Admin)" : ""}{" "}
                {selectedRole === "employee" ? "(Employee)" : ""}
              </button>

              <div className="create-account">
                <p>New on our Platform?</p>
                <Link to="/register">Create an account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// {}
