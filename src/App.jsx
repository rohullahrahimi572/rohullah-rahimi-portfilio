// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Compononts/Home/Home";
import Allproject from"./Compononts/Home/Project/Allproject"
import Navebar from "./Compononts/Home/Navebar/Navebar";
import SplashCursor from "./Compononts/MouseEffect/SplashCursor";

const App = () => {
  return (
    <div className="bg-black  font-poppins">
      <SplashCursor />
      <Router>
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Allproject />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
