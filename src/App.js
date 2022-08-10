import React from "react";
import { createRoot } from "react-dom/client";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <div className="wrapper">
      <Home />
      <Destinations />
      <Services />
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
