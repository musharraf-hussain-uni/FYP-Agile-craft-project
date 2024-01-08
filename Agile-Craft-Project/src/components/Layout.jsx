import React from "react";
import Home from "../pages/Home/Home";
// import Services from "../pages/Services/Services";
// import About from "../pages/About/About";
// import Contact from "../pages/Contact/Contact";
// import Cta from "./Cta";
import Footer from "./footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <section id="Home">
        <Home />
      </section>

      <section id="Contact">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;

// <section id="Services">
//         <Services />
//       </section>
//       <section id="About">
//         <About />
//       </section>
//             <section id="Contact">
//             <Contact />
//           </section>