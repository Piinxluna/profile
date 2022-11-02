import React from "react";
import "./ActivityCard.css";
import { FaArrowRight } from "react-icons/fa";

function ActivityCard(props) {
  const { detail } = props;
  return (
    <div className="activity-card">
      <h3>{detail.name}</h3>
      {!!detail.award && <h4>ได้รับรางวัล{detail.award}</h4>}
      {!!detail.score && <h4>ได้{detail.score}</h4>}
      <p>จัดโดย{detail.organizer}</p>
      <p>เมื่อวันที่ {detail.startDate}</p>
      <a href={`/profile/activities/${detail.id}`}>
        <button>
          ดูรายละเอียดเพิ่มเติม <FaArrowRight />
        </button>
      </a>
    </div>
  );
}

export default ActivityCard;
