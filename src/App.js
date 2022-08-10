import React from "react";
import { createRoot } from "react-dom/client";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="wrapper">
      <Home />
      <Destinations />
      <Services />
      <Gallery />
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
