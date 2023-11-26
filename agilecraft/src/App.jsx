// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/Signup";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/services">
          <Route index element={<Services />} />
        </Route>
        <Route path="/about">
          <Route index element={<About />} />
        </Route>
        <Route path="/contact">
          <Route index element={<Contact />} />
        </Route>
        <Route path="/login">
          <Route index element={<Login />} />
        </Route>
        <Route path="/register">
          <Route index element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
