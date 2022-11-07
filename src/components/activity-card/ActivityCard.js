// import "./ActivityCard.css";
import { FaArrowRight } from "react-icons/fa";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ActivityCard(props) {
  const { detail } = props;
  const dataId = detail.id;

  return (
    <Card className="activity-card w-75 m-4 mx-auto px-4 py-3 text-center">
      <Card.Body>
        <Card.Title className="fs-3 mb-2">{detail.name}</Card.Title>
        <p>จัดโดย {detail.organizer}</p>
        {detail.endDate ? (
          <p>
            เมื่อวันที่ {detail.startDate} - {detail.endDate}
          </p>
        ) : (
          <p>เมื่อวันที่ {detail.startDate}</p>
        )}
        {detail.award ? (
          <p className="fs-5">ได้รับรางวัล{detail.award}</p>
        ) : null}
        {detail.score ? <p className="fs-5">ได้{detail.score}</p> : null}
        <Button
          onClick={() => {
            props.setDataFromCard(dataId);
          }}
          variant="outline-dark"
        >
          ดูรายละเอียดเพิ่มเติม <FaArrowRight />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ActivityCard;
