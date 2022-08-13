import React from "react";
import { createRoot } from "react-dom/client";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Home />
      <Destinations />
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
