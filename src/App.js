import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Activities from "./pages/activities";
import Projects from "./pages/projects";
import Hobbies from "./pages/hobbies";

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
