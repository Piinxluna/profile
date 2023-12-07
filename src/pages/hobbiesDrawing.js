import React from "react";
import artworks from "./../data/artworks.json";

import { InstagramEmbed } from "react-social-media-embed";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function hobbiesDrawing() {
  const igArtworkElements = artworks.map((artwork, index) => {
    if (artwork.type === "ig") {
      return (
        <Col key={index} className="align-self-center">
          <InstagramEmbed url={artwork.src} />
        </Col>
      );
    }
    return null;
  });

  const postimgArtworks = artworks.map((artwork, index) => {
    if (artwork.type === "postimg") {
      return (
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="popover">
              <Popover.Body className="fs-5">{artwork.title}</Popover.Body>
            </Popover>
          }
        >
          <img
            className="m-2 rounded align-self-center"
            src={artwork.src}
            alt={artwork.title}
            key={index}
            style={{ "max-width": "400px", height: "100%" }}
          />
        </OverlayTrigger>
      );
    }
    return null;
  });

  return (
    <>
      <Container className="hobbies-drawing pt-3">
        <h1 className="m-4">ตัวอย่างผลงาน</h1>
        <Row
          className="igArtworks-grid justify-content-center"
          gap={0}
          s={1}
          md={2}
          xl={3}
        >
          {igArtworkElements}
        </Row>
        <hr className="my-5" />
        <div className="privateArtworks-grid d-flex flex-wrap justify-content-center ">
          {postimgArtworks}
        </div>
      </Container>
    </>
  );
}

export default hobbiesDrawing;
