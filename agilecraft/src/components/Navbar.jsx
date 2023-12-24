// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/AgileLogo.png"; // Adjust the path based on your actual file structure
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  const links = ["Home", "Services", "About", "Contact"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div>
        <img src={logo} alt="Logo" height="50px" />
      </div>
      <h1 className="logo-text">Agile Craft</h1>
      {links.map((item) => (
        <ul key={item.id}>
          <li>
            <a href={`#${item}`}>{item}</a>
          </li>
        </ul>
      ))}
      <div className="button-container">
        <Link to="/login">
          <button className="login-button">LogIn</button>
        </Link>
        <Link to="/register">
          <button className="signUp-button">SignUp</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
