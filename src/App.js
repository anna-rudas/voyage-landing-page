import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Credits from "./components/Credits";
import Main from "./Main";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <ScrollToTop />
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
