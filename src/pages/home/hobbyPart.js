import React from "react";
import "./hobbyPart.css";
import HobbyCard from "./../../components/home-hobby-card/HomeHobbyCard";
import hobbies from "./../../data/hobbies.json";

const HobbyPart = () => {
  const hobbyElements = hobbies.map((hobby, index) => {
    return <HobbyCard key={index} detail={hobby} />;
  });
  return (
    <div className="home-hobbies">
      <h3>งานอดิเรก</h3>
      <div className="home-hobbies-grid">{hobbyElements}</div>
    </div>
  );
};

export default HobbyPart;
