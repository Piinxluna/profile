import React from "react";
import hobbies from "./../data/hobbies.json";
import HobbiesBlock from "../components/hobby-block/HobbyBlock";

import Container from "react-bootstrap/Container";

const Hobbies = () => {
  const hobbyElements = hobbies.map((hobby, index) => {
    return <HobbiesBlock key={index} detail={hobby} />;
  });
  return (
    <Container className="hobbies pt-3">
      <h1 className="m-4">งานอดิเรก</h1>
      <div className="hobbies-grid">{hobbyElements}</div>
    </Container>
  );
};

export default Hobbies;
