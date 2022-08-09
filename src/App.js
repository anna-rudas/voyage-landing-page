import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="wrapper">
      <Home />
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
