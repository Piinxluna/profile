import React from "react";
import "./hobbyPart.css";
import HobbyCard from "./../../components/home-hobby-card/HomeHobbyCard";
import hobbies from "./../../data/hobbies.json";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HobbyPart = () => {
  const hobbyElements = hobbies.map((hobby, index) => {
    return <HobbyCard key={index} detail={hobby} />;
  });
  return (
    <Container className="home-hobbies">
      <Row>
        <Col md={2} className="my-4">
          <h3 className="text-md-end">งานอดิเรก</h3>
        </Col>
        <Col md={10} className="pt-md-5">
          <Row xs={1} md={6} className="justify-content-md-center">
            {hobbyElements}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HobbyPart;
