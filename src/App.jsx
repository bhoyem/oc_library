import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import CharacterLibrary from "./pages/characterLibrary.jsx";
import CharacterCreation from "./pages/characterCreation.jsx";
import "./App.css";
import LandingPageLayout from "./pages/LandingPage.jsx";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div
        id="landingPageContainer"
        className="w-full h-[95%] min-h-[500px] max-h-[99vh] min-w-[360px] mb-[20px] flex flex-col grow items-center outline-orange-500 outline-2 outline-dashed"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/characterLibrary" element={<CharacterLibrary />} />
          <Route path="/characterCreation" element={<CharacterCreation />} />
        </Routes>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
