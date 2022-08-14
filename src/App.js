import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Credits from "./components/Credits";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
