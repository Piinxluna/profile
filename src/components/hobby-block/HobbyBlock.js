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
    <div className="hobby-block">
      <div className="icon">
        {detail.title === "เล่นเกม" ? <IoGameController /> : null}
        {detail.title === "อ่านนิยาย" ? <ImBook /> : null}
        {detail.title === "วาดรูป" ? <MdDraw /> : null}
        {detail.title === "เต้นโคฟเวอร์" ? <GiMusicalNotes /> : null}
      </div>

      <h2>{detail.title}</h2>
      <p>{detail.description}</p>
      {detail.moreInfo ? (
        <a href={`/profile/hobbies/${detail.moreInfo}`}>
          ดูผลงานเพิ่มเติม <FaArrowRight />
        </a>
      ) : null}
    </div>
  );
}

export default HobbyBlock;
