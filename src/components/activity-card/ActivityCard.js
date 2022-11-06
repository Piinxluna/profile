import React from "react";
// import "./ActivityCard.css";
import { FaArrowRight } from "react-icons/fa";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ActivityCard(props) {
  const { detail } = props;
  return (
    <Card className="activity-card w-75 m-4 mx-auto px-4 py-3 text-center">
      <Card.Body>
        <Card.Title className="fs-3 mb-3">{detail.name}</Card.Title>
        <Card.Text>
          <p className="lh-lg">
            จัดโดย {detail.organizer} <br /> เมื่อวันที่ {detail.startDate}
          </p>
        </Card.Text>
        <Card.Text>
          {detail.award ? (
            <p className="fs-5">ได้รับรางวัล{detail.award}</p>
          ) : null}
          {detail.score ? <p className="fs-5">ได้{detail.score}</p> : null}
        </Card.Text>
        <Button
          href={`/profile/activities/${detail.id}`}
          variant="outline-dark"
        >
          ดูรายละเอียดเพิ่มเติม <FaArrowRight />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ActivityCard;
