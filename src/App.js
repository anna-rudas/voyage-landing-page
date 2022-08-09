import React from "react";
import { createRoot } from "react-dom/client";
import Destinations from "./components/Destinations";
import Home from "./components/Home";

function App() {
  return (
    <div className="wrapper">
      <Home />
      <Destinations />
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
