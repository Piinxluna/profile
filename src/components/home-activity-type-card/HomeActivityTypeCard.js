import "./HomeActivityTypeCard.css";
import { FaArrowRight } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function HomeActivityType(props) {
  const { detail } = props;
  return (
    // <Col sm={4}>
    <Col>
      <Card className="home-activity-type-card text-center">
        <Card.Img variant="top" src={detail.thumbnailUrl} />
        <Card.Body>
          <Card.Title>{detail.title}</Card.Title>
          <Button href={`/profile/activities/${detail.link}`} variant="primary">
            ดูผลงาน <FaArrowRight />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default HomeActivityType;
