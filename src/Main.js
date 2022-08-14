import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function Main() {
  return (
    <>
      <Home />
      <Destinations />
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
