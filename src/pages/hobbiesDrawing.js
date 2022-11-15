import React from "react";

import Container from "react-bootstrap/Container";
import { IGEmbed } from "react-ig-embed";

function hobbiesDrawing() {
  return (
    <Container className="hobbies-drawing pt-3">
      <h1 className="m-4">ตัวอย่างผลงาน</h1>
      <IGEmbed url="https://www.instagram.com/p/CVh-Fu-B6ch/" />
    </Container>
  );
}

export default hobbiesDrawing;
