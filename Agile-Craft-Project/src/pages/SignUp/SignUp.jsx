// Login.jsx
import { useState } from "react";
import "./SignUp.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import vectorSignUp from "./vectorSignUp.png"; // Adjust the path based on your actual file structure
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fName, lName, email, password, phoneNumber }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setData(data.message);
      navigate("/");
    } catch (error) {
      setError(error.message.slice(20, 25));
    }
    return data;
  };

  // console.log(data);
  return (
    <>
      <div className="login-container">
        {/* Left Panel */}
        <div className="left-panel">
          <img src={vectorSignUp} alt="" />
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
                  ? "Password match. Try again"
                  : "User or email exist. Create a new one or login to your account."}
              </p>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="input"
                placeholder="First Name"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
              <input
                type="text"
                className="input"
                placeholder="Last Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                className="input"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input type="password" className="input" placeholder="Password" />
              <input
                type="password"
                className="input"
                placeholder="Confirm Password"
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

              <button type="submit">Sign Up</button>

              <div className="create-account">
                <p>Already have an account?</p>
                <Link to="/login">LogIn</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
