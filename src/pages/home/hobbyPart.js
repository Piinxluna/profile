import React from "react";
import "./hobbyPart.css";
import HobbyCard from "./../../components/home-hobby-card/HomeHobbyCard";
import hobbies from "./../../data/hobbies.json";

import Container from "react-bootstrap/Container";

const HobbyPart = () => {
  const hobbyElements = hobbies.map((hobby, index) => {
    return <HobbyCard key={index} detail={hobby} />;
  });
  return (
    <Container className="home-hobbies">
      <h3>งานอดิเรก</h3>
      <div className="home-hobbies-grid">{hobbyElements}</div>
    </Container>
  );
};

export default HobbyPart;
