import React from "react";
import "./HomeHobbyCard.css";
import { FaArrowRight } from "react-icons/fa";

import { IoGameController } from "react-icons/io5";
import { ImBook } from "react-icons/im";
import { MdDraw } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";

import Col from "react-bootstrap/Col";

function HomeHobbyCard(props) {
  const { detail } = props;

  return (
    <Col className="hobby-card mb-3 mr-3 shadow-sm">
      <div className="icon fs-3 mb-2">
        {detail.title === "เล่นเกม" && <IoGameController />}
        {detail.title === "อ่านนิยาย" && <ImBook />}
        {detail.title === "วาดรูป" && <MdDraw />}
        {detail.title === "เต้นโคฟเวอร์" && <GiMusicalNotes />}
      </div>

      <h4>{detail.title}</h4>
      <p>{detail.description}</p>

      {!!detail.moreInfo && (
        <a href={`/profile/hobbies/${detail.moreInfo}`}>
          ดูผลงานเพิ่มเติม <FaArrowRight />
        </a>
      )}
    </Col>
  );
}

export default HomeHobbyCard;
