import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import "./App.css";
import LandingPageLayout from "./ui/LandingPage";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div
        id="landingPageContainer"
        className="w-full h-[95%] min-h-[500px] max-h-[99vh] min-w-[360px] mb-[20px] flex flex-col grow items-center outline-2 outline-orange-500 "
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
