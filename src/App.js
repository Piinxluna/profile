import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ActivitiesHighlight from "./pages/activities/activitiesHighlight";
import ActivitiesComputer from "./pages/activities/activitiesComputer";
import ActivitiesVolunteer from "./pages/activities/activitiesVolunteer";
import ActivitiesOthers from "./pages/activities/activitiesOthers";
import Projects from "./pages/projects";
import Hobbies from "./pages/hobbies";
import HobbiesDrawing from "./pages/hobbiesDrawing";

import Test from "./pages/TestParent.js";

function App() {
  return (
    // <Router>
    <Router basename="/profile">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/activities/highlight" element={<ActivitiesHighlight />} />
        <Route path="/activities/computer" element={<ActivitiesComputer />} />
        <Route path="/activities/volunteer" element={<ActivitiesVolunteer />} />
        <Route path="/activities/others" element={<ActivitiesOthers />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/hobbies/drawing" element={<HobbiesDrawing />} />
      </Routes>
    </Router>
  );
}

export default App;
