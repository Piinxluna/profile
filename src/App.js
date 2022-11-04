import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ActivitiesComputer from "./pages/activitiesComputer";
import ActivitiesVolunteer from "./pages/activitiesVolunteer";
import ActivitiesOthers from "./pages/activitiesOthers";
import Projects from "./pages/projects";
import Hobbies from "./pages/hobbies";
import HobbiesDrawing from "./pages/hobbiesDrawing";

function App() {
  return (
    <Router basename="/profile">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/activities/computer" element={<ActivitiesComputer />} />
        <Route path="/activities/volunteer" element={<ActivitiesVolunteer />} />
        <Route path="/activities/others" element={<ActivitiesOthers />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/hobbies/drawing" element={<HobbiesDrawing />} />
      </Routes>
    </Router>
  );
}

export default App;
