import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Intro from "./Intro";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Cta from "./Cta";
import Footer from "./footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <section id="Home">
        <Home />
      </section>
      <section id="Intro">
        <Intro />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Cta">
        <Cta />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section id="Contact">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
