import React from "react";
import "./HobbyBlock.css";
import { FaArrowRight } from "react-icons/fa";

import { IoGameController } from "react-icons/io5";
import { ImBook } from "react-icons/im";
import { MdDraw } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";

function HobbyBlock(props) {
  const { detail } = props;

  return (
    <div className="HobbyBlock">
      <div className="icon">
        {detail.title === "เล่นเกม" && <IoGameController />}
        {detail.title === "อ่านนิยาย" && <ImBook />}
        {detail.title === "วาดรูป" && <MdDraw />}
        {detail.title === "เต้นโคฟเวอร์" && <GiMusicalNotes />}
      </div>

      <h2>{detail.title}</h2>
      <p>{detail.description}</p>
      {!!detail.moreInfo && (
        <a href={`/profile/hobbies/${detail.moreInfo}`}>
          ดูผลงานเพิ่มเติม <FaArrowRight />
        </a>
      )}
    </div>
  );
}

export default HobbyBlock;
