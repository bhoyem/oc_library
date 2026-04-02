import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import About from "./pages/about.js";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import LandingPageLayout from "./ui/LandingPage";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div
        id="landingPageContainer"
        className="min-h-[60vh] max-h-[99vh] max-w-[95vw] mt-[20px] flex flex-col items-center w-[85%] h-[95%] outline-2 outline-orange-500 "
      >
        <Navbar />
        <LandingPageLayout />
        {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
