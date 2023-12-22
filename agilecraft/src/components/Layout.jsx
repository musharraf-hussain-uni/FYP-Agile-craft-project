import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <section id="Home">
        <Home />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default Layout;
